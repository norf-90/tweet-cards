import React from 'react';

import { Header, Navigation, Link } from './SharedLayout.styled';
import BackButton from '../../components/BackButton/BackButton';

const SharedLayout = () => (
  <Header>
    <BackButton />
    <Navigation>
      <Link to="/">Home</Link>
      <Link to="/tweets">Tweets</Link>
    </Navigation>
  </Header>
);
export default SharedLayout;
