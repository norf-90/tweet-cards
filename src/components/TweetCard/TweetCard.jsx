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
} from './TweetCard.styled';
import icon from '../../assets/images/icon.png';
import logo from '../../assets/images/tweet-card-logo.png';
import decorativeImg from '../../assets/images/tweet-card-pic.png';

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
      <Text> 777 tweets</Text>
      <Text>100,500 Followers</Text>
      <button type="button">Follow</button>
    </TextContainer>
  </Container>
);
export default TweetCard;
