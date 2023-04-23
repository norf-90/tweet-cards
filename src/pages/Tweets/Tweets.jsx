import React, { useState } from 'react';

import TweetCard from '../../components/TweetCard/TweetCard';

const Tweets = () => {
  const [tweets, setTweets] = useState(null);
  return (
    <main>
      <TweetCard
        following
        tweets="8473"
        followers="100500"
        imgUrl="../../assets/images/favicon.svg"
      />
    </main>
  );
};

export default Tweets;
