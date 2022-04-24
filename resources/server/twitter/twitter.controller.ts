import { config } from '../config';
import { twitterLogger } from './twitter.utils';
import { Profile, Tweet, TwitterEvents } from '../../../typings/twitter';
import { getSource } from '../utils/miscUtils';
import TwitterService from './twitter.service';
import { onNetPromise } from '../lib/PromiseNetEvents/onNetPromise';
import { RateLimiter } from '../lib/RateLimiter';

export const exp = (global as any).exports;
const AC = exp['pma-anticheat'];
export let PMA: any = null;

emit('pma:getData', (obj: any) => {
  PMA = obj;
});

onNetPromise<void, Profile | string[]>(
  TwitterEvents.GET_OR_CREATE_PROFILE,
  async (reqObj, resp) => {
    const _source = getSource();
    TwitterService.handleGetOrCreateProfile(reqObj, resp).catch((e) => {
      twitterLogger.error(
        `Error occurred in getOrCreateProfile event (${_source}), Error: ${e.message}`,
      );
    });
  },
);

onNetPromise<Profile, Profile>(TwitterEvents.CREATE_PROFILE, async (reqObj, resp) => {
  const _source = getSource();
  TwitterService.handleCreateProfile(reqObj, resp).catch((e) =>
    twitterLogger.error(`Error occurred in createProfile event (${_source}), Error: ${e.message}`),
  );
});

onNetPromise<Profile, Profile>(TwitterEvents.UPDATE_PROFILE, async (reqObj, resp) => {
  const _source = getSource();
  TwitterService.handleUpdateProfile(reqObj, resp).catch((e) =>
    twitterLogger.error(`Error occurred in updateProfile event (${_source}), Error: ${e.message}`),
  );
});

onNetPromise<{ searchValue: string }, Tweet[]>(
  TwitterEvents.FETCH_TWEETS_FILTERED,
  async (reqObj, resp) => {
    const _source = getSource();
    TwitterService.handleFetchTweetsFiltered(reqObj, resp).catch((e) =>
      twitterLogger.error(
        `Error occurred in fetchTweetsFiltered event (${_source}), Error: ${e.message}`,
      ),
    );
  },
  { rateLimit: 5000 },
);

onNetPromise<Tweet, void>(TwitterEvents.CREATE_TWEET, async (reqObj: any, resp) => {
  AC.log(
    '*Tweeted*',
    `${GetPlayerName(reqObj.source)} ${AC.getDiscordId(reqObj.source)}} tweeted: \n ${
      reqObj.data.message
    }`,
    'red',
    'tweets',
  );
  TwitterService.handleCreateTweet(reqObj, resp).catch((e) => {
    twitterLogger.error(
      `Error occurred in createTweet event (${reqObj.source}), Error: ${e.message}`,
    );
  });
});

onNetPromise<{ tweetId: number }, void>(TwitterEvents.DELETE_TWEET, async (reqObj, resp) => {
  const _source = getSource();
  TwitterService.handleDeleteTweet(reqObj, resp).catch((e) => {
    twitterLogger.error(`Error occurred in deleteTweet event (${_source}), Error: ${e.message}`);
  });
});

onNetPromise<{ tweetId: number }, void>(TwitterEvents.TOGGLE_LIKE, async (reqObj, resp) => {
  const _source = getSource();
  TwitterService.handleToggleLike(reqObj, resp).catch((e) => {
    twitterLogger.error(`Error occurred in toggleEvent event (${_source}), Error: ${e.message}`);
  });
});

onNetPromise<{ tweetId: number }, void>(TwitterEvents.RETWEET, async (reqObj, resp) => {
  const _source = getSource();
  TwitterService.handleRetweet(reqObj, resp).catch((e) =>
    twitterLogger.error(`Error occurred in retweet event (${_source}), Error: ${e.message}`),
  );
});

onNetPromise<{ tweetId: number }, void>(TwitterEvents.REPORT, async (reqObj, resp) => {
  const _source = getSource();
  TwitterService.handleReport(reqObj, resp).catch((e) =>
    twitterLogger.error(`Error occurred in report event (${_source}), Error: ${e.message}`),
  );
});

onNetPromise<{ pageId: number }, Tweet[]>(TwitterEvents.FETCH_TWEETS, (req, res) => {
  TwitterService.handleFetchTweets(req.source, req.data.pageId, res).catch((e) =>
    twitterLogger.error(`Error occurred in fetchTweets event (${req.source}), Error: ${e.message}`),
  );
});

if (!config.twitter.allowEditableProfileName && !config.twitter.generateProfileNameFromUsers) {
  const warning =
    `Both allowEdtiableProfileName and generateProfileNameFromUsers ` +
    `are set false - this means users will likely not have profile names ` +
    `for the Twitter App and won't be able to use it!`;
  twitterLogger.warn(warning);
}
