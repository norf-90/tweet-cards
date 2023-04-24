import React, { useEffect, useRef, useState } from 'react';

import TweetList from '../../components/TweetList/TweetList';
import { putFollowingList } from '../../utils/fetchFollowingList';
import fetchTweets from '../../utils/fetchTweets';

const Tweets = () => {
  const [renderData, setRenderData] = useState([]);
  const [followingIds, setFollowingIds] = useState([]);
  const [status, setStatus] = useState('idle');

  const isFirstLoad = useRef(true);

  const updateRenderData = () =>
    renderData.map(tweet =>
      followingIds.includes(tweet.id)
        ? { ...tweet, following: true }
        : { ...tweet, following: false },
    );

  const handleCardClick = async id => {
    if (!followingIds.includes(id)) {
      setFollowingIds([...followingIds, id]);
    } else {
      setFollowingIds(() => followingIds.filter(currentId => currentId !== id));
    }
    await putFollowingList(followingIds);
  };

  useEffect(() => {
    setStatus('pending');
    fetchTweets()
      .then(({ tweetsData, followingList }) => {
        setRenderData(tweetsData);
        setFollowingIds(followingList);
        setStatus('fulfilled');
      })
      .catch(() => {
        setStatus('rejected');
      });
  }, []);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    putFollowingList(followingIds);
  }, [followingIds]);

  return (
    <main>
      {status === 'fulfilled' && (
        <TweetList
          renderData={updateRenderData()}
          handleCardClick={handleCardClick}
        />
      )}
    </main>
  );
};

export default Tweets;
