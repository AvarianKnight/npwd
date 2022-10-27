import {BoostingEvents, BoostProfile, Contract, TradeContract} from '@typings/boosting';
import {PMA} from '../../server';
import {ContractsDB} from '../modules/contracts/db';
import {ProfileDB} from '../modules/profile/db';

const profileDB = new ProfileDB();
const contractsDB = new ContractsDB();

onNet(BoostingEvents.LOAD_BOOSTING_PROFILE, async () => {
	const ply = PMA.getPlayerFromId(source);
	const profile: BoostProfile = await profileDB.fetchProfile(ply.uniqueId);
	let contracts: Contract[] = await contractsDB.fetchContracts(ply.uniqueId);

	/**
	 * Auto clean up expired contracts.
	 */
	const contractsDeleted = contracts.filter(
		(contract: Contract) =>
			Math.floor(((contract.expires_in - Date.now()) / (1000 * 60)) % 60) < 0,
	);

	if (contractsDeleted.length > 0) {
		contractsDeleted.map((contract: Contract) => contractsDB.deleteContract(contract.id));
	}

	/**
	 * Send back only non expired contracts.
	 */
	contracts = contracts.filter(
		(contract: Contract) =>
			Math.floor(((contract.expires_in - Date.now()) / (1000 * 60)) % 60) > 0,
	);

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

onNet(BoostingEvents.TRADE_CONTRACT, async (tradeContract: TradeContract) => {
	await contractsDB.transferContract(Number(tradeContract.player.ssn), tradeContract.contract.id);

	const copyContract = {...tradeContract.contract};
	copyContract.uid = Number(tradeContract.player.ssn);
	emitNet(BoostingEvents.REWARD_CONTRACT, tradeContract.player.source, copyContract);
});
