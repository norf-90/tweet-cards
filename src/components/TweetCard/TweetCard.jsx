import PropTypes from 'prop-types';
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
  UserName,
} from './TweetCard.styled';
import logo from '../../assets/images/tweet-card-logo.png';
import decorativeImg from '../../assets/images/tweet-card-pic.png';
import redactValue from '../../utils/redactValue';

const TweetCard = ({
  id,
  following,
  tweets,
  followers,
  avatar,
  handleClick,
  dropPagIdxToInial,
  user,
}) => (
  <Container>
    <Logo src={logo} alt="goit logo" />
    <DecorativeImage src={decorativeImg} alt="decorative element" />
    <UserName>{user}</UserName>

    <Line />
    <OuterCircle>
      <InnerCircle>
        <Icon src={avatar} alt="user icon" />
      </InnerCircle>
    </OuterCircle>
    <TextContainer>
      <Text> {redactValue(tweets)} Tweets</Text>
      <Text>{redactValue(followers)} Followers</Text>
      <Button
        type="button"
        following={following}
        onClick={() => {
          handleClick(id);
        }}
      >
        {following ? 'Following' : 'Follow'}
      </Button>
    </TextContainer>
  </Container>
);

export default TweetCard;

TweetCard.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
