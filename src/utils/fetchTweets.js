import axios from 'axios';

import { getFollowingList } from './fetchFollowingList';

const BASE_URL = 'https://642ac29200dfa3b5474e5894.mockapi.io/tweets';

const getTweets = async () => {
  const followingListResponce = await getFollowingList();
  const tweetsResponce = await axios.get(BASE_URL);
  return {
    tweetsData: tweetsResponce.data,
    followingList: followingListResponce[0].list,
  };
};

const putTweet = async obj => {
  await axios.put(`${BASE_URL}/${obj.id}`, obj);
};

export { getTweets, putTweet };
