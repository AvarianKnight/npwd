import {Vector3} from '@nativewrappers/client';
import {BoostList} from '@typings/boosting';
import {Delay} from '../../../../utils/fivem';
import {ox, PMA} from '../../../server';
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

	rewardVehicle = async (plate: string, vehProps: any, uniqueId: any) => {
		await ox.execute_async(
			`INSERT INTO owned_vehicles (plate, vehicle, uniqueId, temp) VALUES (?, ?, ?, ?)`,
			[plate, JSON.stringify(vehProps), uniqueId, 1],
		);
	};
}
