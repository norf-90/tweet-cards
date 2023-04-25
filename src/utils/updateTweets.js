const updateTweets = (tweetsArray, followingList) =>
  tweetsArray.map(tweet =>
    followingList.includes(tweet.id)
      ? { ...tweet, following: true }
      : { ...tweet, following: false },
  );

export { updateTweets };
