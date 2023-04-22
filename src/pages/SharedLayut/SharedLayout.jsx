import React from 'react';

import { Header, Navigation, Link } from './SharedLayout.styled';

const SharedLayout = () => (
  <Header>
    <Navigation>
      <Link to="/">Home</Link>
      <Link to="/">Tweets</Link>
    </Navigation>
  </Header>
);
export default SharedLayout;
