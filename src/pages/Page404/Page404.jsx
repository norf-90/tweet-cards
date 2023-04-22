import React from 'react';

import { Wrapper, Title, Text } from './Page404.styled';
import BackButton from '../../components/BackButton/BackButton';

const Page404 = () => (
  <main>
    <Wrapper>
      <Title>404</Title>
      <Text>Uh oh! Looks like you got lost.</Text>
      <Text>Go back to the homepage if you dare!</Text>
      <BackButton title="I dare!" />
    </Wrapper>
  </main>
);

export default Page404;
