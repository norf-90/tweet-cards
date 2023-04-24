import axios from 'axios';

import { getFollowingList } from './fetchFollowingList';

const BASE_URL = 'https://642ac29200dfa3b5474e5894.mockapi.io/tweets';

const fetchTweets = async () => {
  const followingListResponce = await getFollowingList();
  const tweetsResponce = await axios.get(BASE_URL);
  return {
    tweetsData: tweetsResponce.data,
    followingList: followingListResponce[0].list,
  };
};

export default fetchTweets;
