import {Control, Game, Model, Vector3, World} from '@nativewrappers/client';
import {BoostingEvents, BoostMissionEvents, Contract} from '@typings/boosting';
import {PMA} from '../../client';
import {LowTierCoords} from '../coords';
import {boosterProfile} from '../main';
import {BPlayer} from './main';
import {calculateExperience, dropOffSpot, pedRadius, showRoute, spawnPedRadius} from './utility';

let dropOffCoords: Vector3;
let firstLegCompleted = false;
let secondLegCompleted = false;
let dropOffTick: number;

/**
 * Ends boost if dead.
 */
on('pma:onPlayerDeath', () => {
	if (firstLegCompleted || secondLegCompleted) {
		firstLegCompleted = false;
		secondLegCompleted = false;
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

	const spawnPedTick = setTick(async () => {
		if (
			Game.PlayerPed.Position.distance(coords) < 5 &&
			IsControlJustPressed(0, Control.Pickup)
		) {
			//ped handle
			const rcs = spawnPedRadius(coords, pedRadius);
			const ped = await World.createPed(new Model('A_M_M_EastSA_01'), rcs, 0.0, true);
			TaskCombatPed(ped.Handle, Game.PlayerPed.Handle, 0, 1);

			//After boosting vehicle, be directed to drop off location.
			clearTick(spawnPedTick);

			const obtainVehicleTick = setTick(async () => {
				const veh = GetVehiclePedIsEntering(Game.PlayerPed.Handle);
				if (veh === 0) return;
				const boostedVehNet = VehToNet(veh);

				if (boostedVehNet === vehNet) {
					dropOffCoords = dropOffSpot();
					showRoute(dropOffCoords);
					secondLegCompleted = true;
				}

				if (!dropOffTick) {
					clearTick(obtainVehicleTick);
					dropOffTick = setTick(async () => {
						if (Game.PlayerPed.Position.distance(dropOffCoords) < 5) {
							const veh = GetVehiclePedIsIn(Game.PlayerPed.Handle, false);
							const boostedVehNet = VehToNet(veh);
							if (
								boostedVehNet === vehNet &&
								Game.PlayerPed.Position.distance(dropOffCoords) < 2 &&
								IsControlJustPressed(0, Control.Pickup)
							) {
								const vehProps = PMA.Game.GetVehicleProperties(veh);
								boosterProfile.profile = calculateExperience();

								emitNet(
									BoostMissionEvents.REWARD_VEHICLE,
									vehProps,
									boosterProfile.profile,
								);

								BPlayer.active = false;
								clearTick(dropOffTick);
								dropOffTick = null;
							}
						}
					});
				}
			});
		}
	});
});
