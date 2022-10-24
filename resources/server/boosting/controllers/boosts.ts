import {Vector3} from '@nativewrappers/client/lib/utils/Vector3';
import {BoostingEvents, BoostMissionEvents, Contract} from '@typings/boosting';
import {ox, PMA} from '../../server';
import {BoostMission} from '../modules/boosts/service';

const boostMission = new BoostMission();

onNet(BoostingEvents.START_CONTRACT, async (contract: Contract, coords: Vector3) => {
	const ply = PMA.getPlayerFromId(source);

	const veh = await boostMission.spawnCar(contract.vehicle, coords);
	SetVehicleDoorsLocked(veh, 2);

	ply.triggerEvent(BoostingEvents.LOW_TIER_MISSION, NetworkGetNetworkIdFromEntity(veh), coords);
});

onNet(BoostMissionEvents.REWARD_VEHICLE, async (vehProps: any) => {
	console.log('🚀 ~ file: boosts.ts ~ line 18 ~ onNet ~ vehProps', vehProps);
	const ply = PMA.getPlayerFromId(source);
	await boostMission.rewardVehicle(vehProps.plate, vehProps, ply.uniqueId);
});
