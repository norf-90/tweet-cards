import React, { useEffect, useState } from 'react';

import TweetList from '../../components/TweetList/TweetList';
import { putFollowingList } from '../../utils/fetchFollowingList';
import { getTweets, putTweet } from '../../utils/fetchTweets';
import { updateTweets } from '../../utils/updateTweets';

const Tweets = () => {
  const [renderData, setRenderData] = useState([]);
  const [followingIds, setFollowingIds] = useState(null);
  const [status, setStatus] = useState('idle');
  const [tweetId, setTweetId] = useState(undefined);

  const handleCardClick = async id => {
    setTweetId(id);

    if (!followingIds.includes(id)) {
      setFollowingIds(prevIds => [...prevIds, id]);
    } else {
      setFollowingIds(prevIds => prevIds.filter(prevId => prevId !== id));
    }
  };

  useEffect(() => {
    setStatus('pending');
    getTweets()
      .then(({ tweetsData, followingList }) => {
        setFollowingIds(followingList);
        setRenderData(() => updateTweets(tweetsData, followingList));
        setStatus('fulfilled');
      })
      .catch(() => {
        setStatus('rejected');
      });
  }, []);

  useEffect(() => {
    if (tweetId === undefined) return;

    setRenderData(prevData => {
      const data = prevData;
      const curInx = data.findIndex(tweet => tweet.id === tweetId);
      if (data[curInx].following) data[curInx].followers -= 1;
      else data[curInx].followers += 1;

      data[curInx].following = !data[curInx].following;

      putTweet({
        id: data[curInx].id,
        user: data[curInx].user,
        followers: data[curInx].followers,
        tweets: data[curInx].tweets,
        avatar: data[curInx].avatar,
      });

      return data;
    });
    setTweetId(undefined);
  }, [tweetId]);

  useEffect(() => {
    putFollowingList(followingIds);
  }, [followingIds]);

  return (
    <main>
      {status === 'fulfilled' && (
        <TweetList renderData={renderData} handleCardClick={handleCardClick} />
      )}
    </main>
  );
};

export default Tweets;
