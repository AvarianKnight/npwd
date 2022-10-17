import {BoostList} from '@typings/boosting';
import {BoostsDB} from './db';

const boostsDB = new BoostsDB();
export let CarList: BoostList[] = [];

setImmediate(async () => {
	CarList = await boostsDB.fetchCarList();
});
