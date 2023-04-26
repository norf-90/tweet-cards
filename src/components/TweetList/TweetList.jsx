import PropTypes from 'prop-types';
import React, { useState } from 'react';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import TweetCard from '../TweetCard/TweetCard';

const TweetList = ({
  renderData,
  handleCardClick,
  padinationIdx,
  handleClickLoadMore,
}) => {
  const getIsLoadMore = () => {
    if (renderData.length <= padinationIdx) {
      return false;
    }
    return true;
  };

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
      {getIsLoadMore() && <LoadMoreBtn handleClick={handleClickLoadMore} />}
    </>
  );
};

export default TweetList;

TweetList.propTypes = {
  renderData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      following: PropTypes.bool.isRequired,
    }),
  ).isRequired,

  handleCardClick: PropTypes.func.isRequired,
  handleClickLoadMore: PropTypes.func.isRequired,
  padinationIdx: PropTypes.number.isRequired,
};
