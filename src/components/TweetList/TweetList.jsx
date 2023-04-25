import React, { useEffect, useState } from 'react';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import TweetCard from '../TweetCard/TweetCard';

const TweetList = ({ renderData, handleCardClick }) => {
  const [padinationIdx, setPaginationIdx] = useState(3);
  const [isLoadMore, setIsLoadMore] = useState(true);

  const handleClickLoadMore = () => {
    setPaginationIdx(prev => prev + 3);
  };

  useEffect(() => {
    if (renderData.length <= padinationIdx) {
      setIsLoadMore(false);
    }
  }, [padinationIdx, renderData]);

  return (
    <>
      <ul>
        {renderData
          .slice(0, padinationIdx)
          .map(({ id, tweets, followers, avatar, user, following }) => (
            <li key={id}>
              <TweetCard
                id={id}
                following={following}
                tweets={tweets}
                followers={followers}
                avatar={avatar}
                user={user}
                handleClick={handleCardClick}
              />
            </li>
          ))}
      </ul>
      {isLoadMore && <LoadMoreBtn handleClick={handleClickLoadMore} />}
    </>
  );
};

export default TweetList;