import {BoostList} from '@typings/boosting';
import {ox} from '../../../server';

export class BoostsDB {
	fetchCarList = async () => {
		const boostList: BoostList[] = await ox.query_async(
			`SELECT car_model, type FROM boosting_list`,
		);
		return boostList;
	};

	rewardVehicle = async (plate: string, vehProps: any, uniqueId: any) => {
		await ox.execute_async(
			`INSERT INTO owned_vehicles (plate, vehicle, uniqueId, temp) VALUES (?, ?, ?, ?)`,
			[plate, JSON.stringify(vehProps), uniqueId, 1],
		);
	};
}
