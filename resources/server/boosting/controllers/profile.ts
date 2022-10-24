import {PMA} from '../../server';
import {BoostingEvents, BoostProfile, Contract} from '@typings/boosting';
import {ProfileDB} from '../modules/profile/db';
import {ContractsDB} from '../modules/contracts/db';

const profileDB = new ProfileDB();
const contractsDB = new ContractsDB();

onNet(BoostingEvents.LOAD_BOOSTING_PROFILE, async () => {
	const ply = PMA.getPlayerFromId(source);
	const profile: BoostProfile = await profileDB.fetchProfile(ply.uniqueId);
	const contracts: Contract[] = await contractsDB.fetchContracts(ply.uniqueId);

	ply.triggerEvent(BoostingEvents.LOAD_BOOSTING_PROFILE, {
		profile: profile,
		contracts: contracts,
	});
});

onNet(BoostingEvents.DELETE_CONTRACT, async (contractId: number) => {
	const ply = PMA.getPlayerFromId(source);

	await contractsDB.deleteContract(contractId);
	ply.triggerEvent(BoostingEvents.DELETE_CONTRACT);
});
