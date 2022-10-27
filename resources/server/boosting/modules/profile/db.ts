import {BoostProfile} from '@typings/boosting';
import {ox} from '../../../server';

export class ProfileDB {
	fetchProfile = async (uid: number) => {
		const profile: BoostProfile = await ox.single_async(
			`SELECT bp.uid, bp.level, bp.experience, c.small_coin FROM boosting_profile bp, cryptocurrency c WHERE c.ssn = ? and bp.uid = c.ssn`,
			[uid],
		);
		if (profile) {
			return profile;
		} else {
			await ox.execute(
				`INSERT INTO boosting_profile (uid, level, experience) VALUES (?, ?, ?)`,
				[uid, 1, 0],
			);
			return {uid: uid, level: 1, experience: '0'};
		}
	};

	updateCoins = async (coinTotal: number, uid: number) => {
		await ox.execute_async(`UPDATE cryptocurrency SET small_coin = ? WHERE ssn = ?`, [
			coinTotal,
			uid,
		]);
	};
}
