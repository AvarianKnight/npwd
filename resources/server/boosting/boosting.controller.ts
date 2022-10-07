import { PMA } from '../server';
import { BoostingEvents } from './../../../typings/boosting';
import { BoostingDB } from './boosting.db';

const boostingDB = new BoostingDB();

onNet(BoostingEvents.LOAD_BOOSTING_PROFILE, () => {
  const ply = PMA.getPlayerFromId(source);
  boostingDB.fetchProfile(ply.uniqueId);
});
