import {PMA} from '../server';
import {BoostingEvents, BoostProfile, Contract} from './../../../typings/boosting';
import {BoostingDB} from './boosting.db';

const boostingDB = new BoostingDB();

onNet(BoostingEvents.LOAD_BOOSTING_PROFILE, async () => {
	const ply = PMA.getPlayerFromId(source);
	const profile: BoostProfile = await boostingDB.fetchProfile(ply.uniqueId);
	const contracts: Contract[] = await boostingDB.fetchContracts(ply.uniqueId);

	ply.triggerEvent(BoostingEvents.LOAD_BOOSTING_PROFILE, {
		profile: profile,
		contracts: contracts,
	});
});
