import {BoostingEvents, BoostList, Contract, QueuedPlayer} from '@typings/boosting';
import {Delay} from '../../../../utils/fivem';
import {PMA} from '../../../server';
import {QueueList} from '../../controllers/queue';
import {CarList} from '../boosts/service';
import {ContractsDB} from '../contracts/db';

const contractsDB = new ContractsDB();

setTick(async () => {
	await Delay(600000);
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
		console.log(`ID:${plyId} - Name:${player.fullName} rewarded a boosting contract!`);
		emitNet(BoostingEvents.REWARD_CONTRACT, Number(plyId), boostContract);
	});
};

on('playerDropped', () => {
	const player = QueueList.get(source);
	if (player) {
		QueueList.delete(source);
		console.log(
			'Source: ' +
				source +
				'\n' +
				'Name: ' +
				player.fullName +
				'\n' +
				'SSN: ' +
				player.ssn +
				'\nHas left the boost queue by leaving the server.',
		);
	}
});

const contractHandler = async (player: QueuedPlayer) => {
	const boostRank = getBoostRank(player.level);
	const rankedVehicleList = CarList.filter((car: BoostList) => car.type === boostRank);

	const randomNum = Math.floor(Math.random() * rankedVehicleList.length);

	const expires = new Date(new Date(new Date()).setHours(new Date().getHours() + 6)).getTime();
	const vehicleType = rankedVehicleList[randomNum].type;
	const carModel = rankedVehicleList[randomNum].car_model;

	const insertId = await contractsDB.insertContract(
		player.ssn,
		vehicleType,
		expires,
		20,
		carModel,
	);

	console.log(
		`Congratulations ${player.fullName} has received a ${rankedVehicleList[randomNum].car_model} contract.`,
	);

	return {
		id: insertId,
		uid: player.ssn,
		contract_type: vehicleType,
		expires_in: expires,
		cost: 20,
		vehicle: carModel,
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
