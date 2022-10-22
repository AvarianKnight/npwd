import {Vector3} from '@nativewrappers/client/lib/utils/Vector3';
import {BoostingEvents, Contract} from '@typings/boosting';
import {PMA} from '../../server';
import {BoostMission} from '../modules/boosts/service';

const boostMission = new BoostMission();

onNet(BoostingEvents.START_CONTRACT, async (contract: Contract, coords: Vector3) => {
	const ply = PMA.getPlayerFromId(source);

	const veh = await boostMission.spawnCar(contract.vehicle, coords);
	SetVehicleDoorsLocked(veh, 2);

	ply.triggerEvent(BoostingEvents.LOW_TIER_MISSION, NetworkGetNetworkIdFromEntity(veh), coords);
});
