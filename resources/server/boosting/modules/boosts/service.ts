import {Vector3} from '@nativewrappers/client';
import {BoostList} from '@typings/boosting';
import {Delay} from '../../../../utils/fivem';
import {BoostsDB} from './db';

const boostsDB = new BoostsDB();
export let CarList: BoostList[] = [];

setImmediate(async () => {
	CarList = await boostsDB.fetchCarList();
});

export class BoostMission {
	spawnCar = async (model: string, coords: Vector3) => {
		const veh: number = CreateVehicle(
			GetHashKey(model),
			coords.x,
			coords.y,
			coords.z,
			0.0,
			true,
			false,
		);
		await Delay(500);
		console.log('🚀 ~ file: service.ts ~ line 27 ~ BoostMission ~ spawnCar= ~ veh', veh);
		return veh;
	};

	rewardVehicle = () => {
		console.log(19);
	};
}
