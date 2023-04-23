import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Navigation, Link } from './SharedLayout.styled';

const SharedLayout = () => (
  <>
    <Header>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </Navigation>
    </Header>
    <Outlet />
  </>
);
export default SharedLayout;
