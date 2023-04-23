import React from 'react';

import {
  Container,
  Logo,
  DecorativeImage,
  Line,
  OuterCircle,
  Icon,
  InnerCircle,
  TextContainer,
  Text,
  Button,
} from './TweetCard.styled';
import icon from '../../assets/images/icon.png';
import logo from '../../assets/images/tweet-card-logo.png';
import decorativeImg from '../../assets/images/tweet-card-pic.png';
import redactValue from '../../utils/redactValue';

const TweetCard = ({ following = false, tweets, followers, imgUrl }) => (
  <Container>
    <Logo src={logo} alt="goit logo" />
    <DecorativeImage src={decorativeImg} alt="decorative element" />
    <Line />
    <OuterCircle>
      <InnerCircle>
        <Icon src={icon} alt="user icon" />
      </InnerCircle>
    </OuterCircle>
    <TextContainer>
      <Text> {redactValue(tweets)} Tweets</Text>
      <Text>{redactValue(followers)} Followers</Text>
      <Button type="button" following={following}>
        {following ? 'Following' : 'Follow'}
      </Button>
    </TextContainer>
  </Container>
);
export default TweetCard;
