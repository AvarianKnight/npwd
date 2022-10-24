import {Contract} from '@typings/boosting';
import {ox} from '../../../server';

export class ContractsDB {
	fetchContracts = async (uid: number) => {
		const contracts: Contract[] = await ox.query_async(
			`SELECT contract_type, expires_in, cost, vehicle, id FROM boosting_contracts WHERE uid = ?`,
			[uid],
		);

		return contracts;
	};

	deleteContract = async (id: number) => {
		await ox.execute_async(`DELETE FROM boosting_contracts WHERE id = ?`, [id]);
	};

	transferContract = async () => {
		await ox.execute_async(`UPDATE boosting_contracts SET uid = ? WHERE id = ?`);
	};

	insertContract = async (
		ssn: number,
		vehicleType: string,
		expires: number,
		cost: number,
		carModel: string,
	) => {
		const insertId = await ox.insert_async(
			`INSERT INTO boosting_contracts (uid, contract_type, expires_in, cost, vehicle)
             VALUES (?, ?, ?, ?, ?)`,
			[ssn, vehicleType, expires, cost, carModel],
		);

		return insertId;
	};
}
