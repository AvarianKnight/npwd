import {Vector3} from '@nativewrappers/client';
import {BoostList} from '@typings/boosting';
import {Delay} from '../../../../utils/fivem';
import {PMA} from '../../../server';
import {BoostsDB} from './db';

const boostsDB = new BoostsDB();
export let CarList: BoostList[] = [];

setImmediate(async () => {
	CarList = await boostsDB.fetchCarList();
});

export class BoostMission {
	spawnCar = async (model: string, coords: Vector3) => {
		const veh: number = PMA.createVehicle(model, coords);
		await Delay(500);
		return veh;
	};
}
