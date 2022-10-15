import {PMA} from './../../server';
import {BoostingEvents, BoostProfile, Contract} from './../../../../typings/boosting';
import {ProfileDB} from '../modules/profile/db';

const profileDB = new ProfileDB();

onNet(BoostingEvents.LOAD_BOOSTING_PROFILE, async () => {
	const ply = PMA.getPlayerFromId(source);
	const profile: BoostProfile = await profileDB.fetchProfile(ply.uniqueId);
	const contracts: Contract[] = await profileDB.fetchContracts(ply.uniqueId);

	ply.triggerEvent(BoostingEvents.LOAD_BOOSTING_PROFILE, {
		profile: profile,
		contracts: contracts,
	});
});

onNet(BoostingEvents.DELETE_CONTRACT, async (contractId: number) => {
	const ply = PMA.getPlayerFromId(source);

	profileDB.deleteContract(contractId);
	ply.triggerEvent(BoostingEvents.DELETE_CONTRACT);
});
