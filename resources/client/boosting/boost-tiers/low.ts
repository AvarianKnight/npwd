import {Control, Game, Model, Vector3, World} from '@nativewrappers/client';
import {BoostingEvents, Contract} from '@typings/boosting';
import {LowTierCoords} from '../coords';
import {pedRadius, showRoute, spawnPedRadius} from './utility';

export const lowTierHandler = (contract: Contract) => {
	const randomCoords = LowTierCoords[Math.floor(Math.random() * (LowTierCoords.length - 1))];
	showRoute(randomCoords);
	emitNet(BoostingEvents.START_CONTRACT, contract, randomCoords);
};

onNet(BoostingEvents.LOW_TIER_MISSION, (vehNet: number, coords: Vector3) => {
	const spawnPedTick = setTick(async () => {
		if (
			Game.PlayerPed.Position.distance(coords) < 5 &&
			IsControlJustPressed(0, Control.Pickup)
		) {
			//ped handle
			const rcs = spawnPedRadius(coords, pedRadius);
			const ped = await World.createPed(new Model('A_M_M_EastSA_01'), rcs, 0.0, true);

			//TODO: give ped weapon?
			TaskCombatPed(ped.Handle, Game.PlayerPed.Handle, 0, 1);

			clearTick(spawnPedTick);
		}
	});
	// lockedSpawnedVehicle(vehNet);
});
