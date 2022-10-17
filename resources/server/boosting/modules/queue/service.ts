import {BoostingEvents, BoostList, Contract, QueuedPlayer} from '@typings/boosting';
import {Delay} from '../../../../utils/fivem';
import {ox, PMA} from '../../../server';
import {QueueList} from '../../controllers/queue';
import {CarList} from '../boosts/service';

setTick(async () => {
	await Delay(15000);
	manageQueuedPlayers();
});

const manageQueuedPlayers = () => {
	console.log('\nBeginning queue selector...\n');
	const tempCachedPlayers: string[] = [];
	console.log('🚀 ~ file: service.ts ~ line 15 ~ manageQueuedPlayers ~ QueueList', QueueList);
	const playerSources = [...QueueList.keys()];

	if (playerSources.length === 0) {
		console.log('\nNo one in queue...\n');
		return;
	}

	for (let i = 0; i < 5; i++) {
		const randomNum = Math.floor(Math.random() * Object.keys(playerSources).length);
		const plySrc: string = playerSources[randomNum].toString();

		const isPingedBefore = tempCachedPlayers.findIndex((source: string) => source === plySrc);
		if (isPingedBefore === -1 && PMA.getPlayerFromId(plySrc).job.name !== 'police') {
			tempCachedPlayers.push(plySrc);
		}
	}

	tempCachedPlayers.forEach(async (plyId: string) => {
		const player = QueueList.get(Number(plyId));
		const boostContract = <Contract>await contractHandler(player);
		emitNet(BoostingEvents.REWARD_CONTRACT, Number(plyId), boostContract);
	});
};

const contractHandler = async (player: QueuedPlayer) => {
	const boostRank = getBoostRank(player.level);
	const rankedVehicleList = CarList.filter((car: BoostList) => car.type === boostRank);

	const randomNum = Math.floor(Math.random() * rankedVehicleList.length);
	const currentDate = new Date();
	const expires_in = new Date(
		new Date(currentDate).setHours(currentDate.getHours() + 6),
	).toString();
	const insertId = await ox.insert_async(
		`INSERT INTO boosting_contracts (uid, contract_type, expires_in, cost, vehicle)
         VALUES (?, ?, ?, ?, ?)`,
		[
			player.ssn,
			rankedVehicleList[randomNum].type,
			expires_in,
			20,
			rankedVehicleList[randomNum].car_model,
		],
	);

	console.log(
		`Congratulations ${player.fullName} has received a ${rankedVehicleList[randomNum].car_model} contract.`,
	);
	return {
		id: insertId,
		uid: player.ssn,
		contract_type: rankedVehicleList[randomNum].type,
		expires_in: new Date(new Date(currentDate).setHours(currentDate.getHours() + 6)),
		cost: 20,
		vehicle: rankedVehicleList[randomNum].car_model,
	};
};

const getBoostRank = (level: number) => {
	let boostRank;
	switch (level) {
		case 1:
			boostRank = 'B';
			break;
		case 2:
			boostRank = 'B';
			break;
		case 3:
			boostRank = 'A';
			break;
		case 4:
			boostRank = 'S';
			break;
		case 5:
			boostRank = 'S+';
			break;
		default:
			break;
	}
	return boostRank;
};
