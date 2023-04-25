const filterTweets = (filter, tweetsList) => {
  switch (filter) {
    case 'follow':
      return tweetsList.filter(tweet => tweet.following === false);
    case 'following':
      return tweetsList.filter(tweet => tweet.following === true);
    default:
      return tweetsList;
  }
};

export default filterTweets;
