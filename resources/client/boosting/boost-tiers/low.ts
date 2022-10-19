import {BoostingEvents, Contract} from '@typings/boosting';
import {LowTierCoords} from '../coords';
import {lockedSpawnedVehicle} from './utility';

export const lowTierHandler = (contract: Contract) => {
	const randomCoords = LowTierCoords[Math.floor(Math.random() * (LowTierCoords.length - 1))];
	console.log('🚀 ~ file: low.ts ~ line 6 ~ lowTierHandler ~ randomCoords', randomCoords);
	emitNet(BoostingEvents.START_CONTRACT, contract, randomCoords);
};

onNet(BoostingEvents.LOW_TIER_MISSION, (vehNet: number) => {
	lockedSpawnedVehicle(vehNet);
});
