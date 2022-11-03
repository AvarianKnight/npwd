import './config';

import {RewriteFrames} from '@sentry/integrations';
import {config as resourceConfig} from './config';
export const config = resourceConfig;
import {registerCommands} from './commands/registerCommands';

export const exp = (global as any).exports;
export const ox = exp.oxmysql;
export const AC = exp['pma-anticheat'];
export const PMA: any = exp['pma-framework'].getData();

// Setup controllers
import './db/pool';
import './boot/boot.controller';
import './players/player.controller';
import './calls/calls.controller';
import './notes/notes.controller';
import './contacts/contacts.controller';
import './photo/photo.controller';
import './messages/messages.controller';
import './marketplace/marketplace.controller';
import './twitter/twitter.controller';
import './bank/bank';
import './darkmarket/darkmarket';
import './bennys/bennys';
import './property/property';
import './boosting';
// import './match/match.controller';

// setup exports
import './bridge/sv_exports';
import './messages/middleware/emitMessage';
import './rcon/exports';

import {mainLogger} from './sv_logger';
import * as Sentry from '@sentry/node';
import {Delay} from '../utils/fivem';
import {PropertyEvents} from '../../typings/property';

// register commands
registerCommands();

// Setup sentry tracing
if (config.debug.sentryEnabled && process.env.NODE_ENV === 'production') {
	Sentry.init({
		dsn: 'https://fa466f5b83ab4f029052b06bc9dec5cb@sentry.pma.network/3',
		integrations: [new RewriteFrames()],
		release: process.env.SENTRY_VERSION || '0.0.0',
		// Set tracesSampleRate to 1.0 to capture 100%
		// of transactions for performance monitoring.
		// We recommend adjusting this value in production
		tracesSampleRate: 1.0,
	});
}

on('onResourceStart', async (resource: string) => {
	if (GetCurrentResourceName() != resource) return;

	await ox.execute_async(`TRUNCATE npwd_marketplace_listings`);
	await Delay(5000);
	const onlinePlayers = getPlayers();
	for (const player of onlinePlayers) {
		console.log('🚀 ~ file: server.ts ~ line 64 ~ on ~ player', typeof player);
		emitNet(PropertyEvents.RELOAD_APP, Number(player));
	}
	mainLogger.info('Successfully started');
});
