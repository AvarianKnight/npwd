import {BoostingEvents, BoostProfile, QueuedPlayer} from '@typings/boosting';
import {PMA} from '../../server';

export const QueueList = new Map<number, QueuedPlayer>();

onNet(BoostingEvents.JOIN_WAITLIST, (boostProfile: BoostProfile) => {
	const ply = PMA.getPlayerFromId(source);

	QueueList.set(ply.source, {
		ssn: boostProfile.uid,
		fullName: ply.getPlayerName(),
		level: boostProfile.level,
		experience: boostProfile.experience,
	});
	console.log(
		`***BOOSTING*** ${ply.getPlayerName()} | ${ply.uniqueId} just joined the queue, currently ${
			QueueList.size
		} in queue now.`,
	);
});

onNet(BoostingEvents.LEAVE_WAITLIST, () => {
	const ply = PMA.getPlayerFromId(source);

	QueueList.delete(ply.source);
	console.log(
		`***BOOSTING*** ${ply.getPlayerName()} | ${ply.uniqueId} just left the queue, currently ${
			QueueList.size
		} in queue still.`,
	);
});
