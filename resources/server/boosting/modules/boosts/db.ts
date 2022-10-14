import {BoostList} from '../../../../../typings/boosting';
import {ox} from '../../../server';

export class BoostsDB {
	fetchCarList = async () => {
		const boostList: BoostList[] = await ox.query_async(
			`SELECT car_model, type FROM boosting_list`,
		);
		return boostList;
	};
}
