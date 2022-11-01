import {Control, Game, Model, Vector3, World} from '@nativewrappers/client';
import {BoostingEvents, BoostMissionEvents, Contract} from '@typings/boosting';
import {PMA} from '../../client';
import {LowTierCoords} from '../coords';
import {boosterProfile, exp} from '../main';
import {BPlayer} from './main';
import {
	calculateExperience,
	dropOffSpot,
	pedRadius,
	randomWeaponSelector,
	resetBoostMissions,
	showRoute,
	spawnPedRadius,
} from './utility';

/**
 * Ends boost if dead.
 */
on('pma:onPlayerDeath', () => {
	if (BPlayer.firstLegCompleted || BPlayer.secondLegCompleted) {
		BPlayer.firstLegCompleted = false;
		BPlayer.secondLegCompleted = false;
	}
});

export const lowTierHandler = (contract: Contract, totalCoins: number) => {
	const randomCoords = LowTierCoords[Math.floor(Math.random() * (LowTierCoords.length - 1))];
	showRoute(randomCoords);
	emitNet(BoostingEvents.START_CONTRACT, contract, randomCoords, totalCoins);
};

onNet(BoostingEvents.LOW_TIER_MISSION, (vehNet: number, coords: Vector3) => {
	// if active is true you cannot start another mission at the same time.
	BPlayer.active = true;

	BPlayer.spawnPedTick = setTick(async () => {
		if (
			exp['pma-inv'].getInventoryItem('lockpick').quantity > 0 &&
			Game.PlayerPed.Position.distance(coords) < 3 &&
			IsControlJustPressed(0, Control.Pickup)
		) {
			//ped handle
			const rcs = spawnPedRadius(coords, pedRadius);
			const ped = await World.createPed(new Model('A_M_M_EastSA_01'), rcs, 0.0, true);

			//ped combat
			SetPedCombatAttributes(ped.Handle, 3, false);
			SetPedCombatAttributes(ped.Handle, 5, true);
			SetPedCombatAttributes(ped.Handle, 46, true);
			SetEntityAsMissionEntity(ped.Handle, false, false);
			SetPedAccuracy(ped.Handle, 100);
			SetPedMaxHealth(ped.Handle, 400);
			SetEntityHealth(ped.Handle, 400);
			GiveWeaponToPed(ped.Handle, GetHashKey(randomWeaponSelector()), 5000, true, true);
			SetPedDropsWeaponsWhenDead(ped.Handle, false);
			TaskCombatPed(ped.Handle, Game.PlayerPed.Handle, 0, 16);
			SetPedKeepTask(ped.Handle, true);

			//After boosting vehicle, be directed to drop off location.
			clearTick(BPlayer.spawnPedTick);
			BPlayer.spawnPedTick = null;
			const obtainVehicleTick = setTick(async () => {
				const veh = GetVehiclePedIsEntering(Game.PlayerPed.Handle);
				if (veh === 0) return;
				const boostedVehNet = VehToNet(veh);

				if (boostedVehNet === vehNet) {
					BPlayer.dropOffCoords = dropOffSpot();
					showRoute(BPlayer.dropOffCoords);
					BPlayer.secondLegCompleted = true;
				}

				if (!BPlayer.dropOffTick) {
					clearTick(obtainVehicleTick);
					const radius = Math.floor(Math.random() * (1000 - 250) + 250);
					const randomSeconds = Math.floor(Math.random() * (15000 - 12000) + 12000);
					const randomRounds = Math.floor(Math.random() * (5 - 2) + 2);

					// if ped is in any vehicle, this allows them to use friends to get involved as the missions get harder.
					// one you're closer, the radius is randomized to prompt the player, if player passes - they are good.
					BPlayer.hackTick = setTick(() => {
						if (
							Game.PlayerPed.isInAnyVehicle() &&
							Game.PlayerPed.Position.distance(BPlayer.dropOffCoords) < radius &&
							!BPlayer.promptHack
						) {
							BPlayer.promptHack = true;
							exp['pma-hack'].startHacking(
								randomSeconds,
								randomRounds,
								(success: boolean) => {
									if (success) {
										clearTick(BPlayer.hackTick);

										// only the driver will be able to get the reward, they will have to swap seats.
										BPlayer.dropOffTick = setTick(async () => {
											if (
												Game.PlayerPed.Position.distance(
													BPlayer.dropOffCoords,
												) < 10
											) {
												const veh = GetVehiclePedIsIn(
													Game.PlayerPed.Handle,
													false,
												);
												const boostedVehNet = VehToNet(veh);
												if (
													boostedVehNet === vehNet &&
													Game.PlayerPed.Position.distance(
														BPlayer.dropOffCoords,
													) < 5 &&
													IsControlJustPressed(0, Control.Pickup)
												) {
													const vehProps =
														PMA.Game.GetVehicleProperties(veh);
													boosterProfile.profile = calculateExperience();

													resetBoostMissions();
													emitNet(
														BoostMissionEvents.REWARD_VEHICLE,
														vehProps,
														boosterProfile.profile,
													);
												}
											}
										});
									} else {
										// reset boost if failed
										resetBoostMissions();
										emit(BoostMissionEvents.FAIL_VEHICLE);
									}
								},
							);
						}
					});
				}
			});
		}
	});
});
