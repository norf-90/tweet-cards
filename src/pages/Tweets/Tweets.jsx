import React, { useEffect, useState } from 'react';

import Panel from '../../components/Panel/Panel';
import TweetList from '../../components/TweetList/TweetList';
import { putFollowingList } from '../../utils/fetchFollowingList';
import { getTweets, putTweet } from '../../utils/fetchTweets';
import filterTweets from '../../utils/filterTweets';
import updateTweets from '../../utils/updateTweets';

const Tweets = () => {
  const [renderData, setRenderData] = useState([]);
  const [followingIds, setFollowingIds] = useState([]);
  const [status, setStatus] = useState('idle');
  const [tweetId, setTweetId] = useState(undefined); // записуємо id клікнутого твіта
  const [filter, setFilter] = useState('all');
  const [padinationIdx, setPaginationIdx] = useState(3);

  const handleCardClick = async id => {
    setTweetId(id);

    if (!followingIds.includes(id)) {
      setFollowingIds(prevIds => [...prevIds, id]);
    } else {
      setFollowingIds(prevIds => prevIds.filter(prevId => prevId !== id));
    }
  };

  const handleFilterChange = evt => {
    setFilter(evt.target.value);
    setPaginationIdx(3);
  };

  const increasePagIdx = () => setPaginationIdx(prev => prev + 3);

  useEffect(() => {
    // фетчимо твіти і список
    setStatus('pending');
    getTweets()
      .then(({ tweetsData, followingList }) => {
        setFollowingIds(followingList);
        // додаємо для кожного твіта поле following (true or false)
        setRenderData(() => updateTweets(tweetsData, followingList));
        setStatus('fulfilled');
      })
      .catch(() => {
        setStatus('rejected');
      });
  }, []);

  useEffect(() => {
    if (tweetId === undefined) return;

    // змінюємо значення followers при кліку на кнопку
    setRenderData(prevData => {
      const data = prevData;
      const curInx = data.findIndex(tweet => tweet.id === tweetId);
      if (data[curInx].following) data[curInx].followers -= 1;
      else data[curInx].followers += 1;

      data[curInx].following = !data[curInx].following;

      // відправляємо зміни на mockapi (крім поля following)
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
    // після кожної зміни followingIds відправляємо оновлений масив на mockapi
    putFollowingList(followingIds);
  }, [followingIds]);

  return (
    <main>
      {status === 'fulfilled' && (
        <>
          <Panel handleFilterChange={handleFilterChange} />
          <TweetList
            renderData={filterTweets(filter, renderData)}
            handleCardClick={handleCardClick}
            padinationIdx={padinationIdx}
            handleClickLoadMore={increasePagIdx}
          />
        </>
      )}
    </main>
  );
};

export default Tweets;
