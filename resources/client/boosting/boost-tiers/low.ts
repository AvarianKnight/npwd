import {Control, Game, Vector3} from '@nativewrappers/client';
import {BoostingEvents, BOOSTING_APP, BoostMissionEvents, Contract} from '@typings/boosting';
import {PMA} from '../../client';
import {LowTierCoords} from '../coords';
import {boosterProfile, exp} from '../main';
import {BPlayer} from './main';
import {
	calculateExperience,
	dropOffSpot,
	getRandomInt,
	pedRadius,
	resetBoostMissions,
	showRoute,
	spawnPed,
} from './utility';

/**
 * Ends boost if dead.
 */
on('pma:onPlayerDeath', () => {
	if (BPlayer.firstLegCompleted || BPlayer.secondLegCompleted) {
		resetBoostMissions();
	}
});

export const lowTierHandler = (contract: Contract, totalCoins: number) => {
	const randomCoords = LowTierCoords[Math.floor(Math.random() * (LowTierCoords.length - 1))];
	emitNet(BoostingEvents.START_CONTRACT, contract, randomCoords, totalCoins);
};

onNet(BoostingEvents.LOW_TIER_MISSION, (vehNet: number, coords: Vector3) => {
	emitNet(BoostingEvents.SEND_TEXT);
	// if active is true you cannot start another mission at the same time.
	BPlayer.active = true;
	showRoute(coords);

	BPlayer.spawnPedTick = setTick(async () => {
		if (
			exp['pma-inv'].getInventoryItem('lockpick').quantity > 0 &&
			Game.PlayerPed.Position.distance(coords) < 3 &&
			IsControlJustPressed(0, Control.Pickup)
		) {
			//ped handle
			// const rcs = spawnPedRadius(coords, pedRadius);
			spawnPed(coords, pedRadius, getRandomInt(1, 3));

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
					const radius = getRandomInt(250, 1000);
					const randomSeconds = getRandomInt(12, 15) * 1000;
					const randomRounds = getRandomInt(2, 5);

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
													SendNUIMessage({
														app: BOOSTING_APP,
														method: BoostingEvents.LOAD_BOOSTING_PROFILE,
														data: boosterProfile,
													});
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
