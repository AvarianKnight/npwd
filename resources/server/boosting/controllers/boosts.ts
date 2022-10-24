import {Vector3} from '@nativewrappers/client/lib/utils/Vector3';
import {BoostingEvents, BoostMissionEvents, Contract} from '@typings/boosting';
import {PMA} from '../../server';
import {BoostsDB} from '../modules/boosts/db';
import {BoostMission} from '../modules/boosts/service';
import {ContractsDB} from '../modules/contracts/db';

const boostMission = new BoostMission();
const boostsDB = new BoostsDB();
const contractsDB = new ContractsDB();

onNet(BoostingEvents.START_CONTRACT, async (contract: Contract, coords: Vector3) => {
	const ply = PMA.getPlayerFromId(source);

	await contractsDB.deleteContract(contract.id);
	const contractList: Contract[] = await contractsDB.fetchContracts(ply.uniqueId);
	const veh = await boostMission.spawnCar(contract.vehicle, coords);
	SetVehicleDoorsLocked(veh, 2);

	ply.triggerEvent(BoostingEvents.FETCH_CONTRACTS, contractList);
	ply.triggerEvent(BoostingEvents.LOW_TIER_MISSION, NetworkGetNetworkIdFromEntity(veh), coords);
});

onNet(BoostMissionEvents.REWARD_VEHICLE, async (vehProps: any) => {
	const ply = PMA.getPlayerFromId(source);
	await boostsDB.rewardVehicle(vehProps.plate, vehProps, ply.uniqueId);
});
