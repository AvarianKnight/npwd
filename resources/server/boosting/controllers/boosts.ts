import {Vector3} from '@nativewrappers/client/lib/utils/Vector3';
import {BoostingEvents, BoostMissionEvents, Contract} from '@typings/boosting';
import {PMA} from '../../server';
import {BoostsDB} from '../modules/boosts/db';
import {BoostMission} from '../modules/boosts/service';
import {ContractsDB} from '../modules/contracts/db';
import {ProfileDB} from '../modules/profile/db';

const boostMission = new BoostMission();
const boostsDB = new BoostsDB();
const contractsDB = new ContractsDB();
const profilesDB = new ProfileDB();

onNet(
	BoostingEvents.START_CONTRACT,
	async (contract: Contract, coords: Vector3, totalCoins: number) => {
		const ply = PMA.getPlayerFromId(source);

		if (totalCoins >= contract.cost) {
			const newCoinTotal = totalCoins - contract.cost;
			await profilesDB.updateCoins(newCoinTotal, ply.uniqueId);
			await contractsDB.deleteContract(contract.id);
			const contractList: Contract[] = await contractsDB.fetchContracts(ply.uniqueId);
			const veh = await boostMission.spawnCar(contract.vehicle, coords);
			SetVehicleDoorsLocked(veh, 2);

			ply.triggerEvent(BoostingEvents.PURCHASE_CONTRACT, {
				small_coin: newCoinTotal,
				contracts: contractList,
			});

			ply.triggerEvent(
				BoostingEvents.LOW_TIER_MISSION,
				NetworkGetNetworkIdFromEntity(veh),
				coords,
			);
		} else {
			console.log('too much');
		}
	},
);

onNet(BoostMissionEvents.REWARD_VEHICLE, async (vehProps: any) => {
	const ply = PMA.getPlayerFromId(source);
	await boostsDB.rewardVehicle(vehProps.plate, vehProps, ply.uniqueId);
});
