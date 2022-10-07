import { BoostProfile } from '../../../typings/boosting';
import { ox } from './../server';

export class BoostingDB {
  fetchProfile = async (uid: number): Promise<BoostProfile> => {
    const profile = await ox.query_async(
      `SELECT uid, level, experience FROM boosting_profile WHERE uid = ?`,
      [uid],
    );
    if (profile.length > 0) {
      return profile[0];
    } else {
      await ox.execute(`INSERT INTO boosting_profile (uid, level, experience) VALUES (?, ?, ?)`, [
        uid,
        1,
        0,
      ]);
      return { uid: uid, level: 1, experience: '0' };
    }
  };
}
