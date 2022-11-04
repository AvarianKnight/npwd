import {Vector3} from '@nativewrappers/client/lib/utils/Vector3';
import {BoostingEvents, BoostMissionEvents, BoostProfile, Contract} from '@typings/boosting';
import {MessageEvents} from '@typings/messages';
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

		const calculateSubtraction = totalCoins - contract.cost;
		if (calculateSubtraction >= 0) {
			if (ply.getInventoryItem('raspberry').quantity > 0) {
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

				if (contract.contract_type === 'B') {
					ply.triggerEvent(
						BoostingEvents.LOW_TIER_MISSION,
						NetworkGetNetworkIdFromEntity(veh),
						coords,
					);
				}
			} else {
				ply.triggerEvent(
					BoostingEvents.MISSING_EQUIPMENT,
					'You are missing a required item.',
				);
			}
		} else {
			ply.triggerEvent(
				BoostingEvents.MISSING_EQUIPMENT,
				'You are missing the required coins.',
			);
		}
	},
);

onNet(BoostMissionEvents.REWARD_VEHICLE, async (vehProps: any, boostProfile: BoostProfile) => {
	const ply = PMA.getPlayerFromId(source);
	if (ply.getInventoryItem('raspberry').quantity > 0) {
		//deposit vehicle in inventory
		await boostsDB.rewardVehicle(vehProps.plate, vehProps, ply.uniqueId);

		//update experience and/or level
		await profilesDB.updateExperience(boostProfile, ply.uniqueId);
		ply.removeInventoryItem('raspberry', 1);
	} else {
		ply.triggerEvent(BoostMissionEvents.FAIL_VEHICLE);
	}
});

onNet(BoostMissionEvents.FAIL_VEHICLE, async () => {
	const ply = PMA.getPlayerFromId(source);

	if (ply.getInventoryItem('raspberry').quantity > 0) {
		ply.removeInventoryItem('raspberry', 1);
	}
	ply.triggerEvent(BoostMissionEvents.FAIL_VEHICLE);
});

onNet(BoostingEvents.SEND_TEXT, (message: string) => {
	const plySrc = source;
	const ply = PMA.getPlayerFromId(plySrc);

	const dataObj = {
		source: plySrc,
		phoneNumber: ply.getPhoneNumber(),
		message: message,
	};
	emit(MessageEvents.SEND_MESSAGE_DARK, dataObj);
});
