import React from 'react';

import { Wrapper, Title, Text, List, Item } from './Home.styled';

const Home = () => (
  <main>
    <Wrapper>
      <Title>Hello!</Title>
      <Text>
        This is a test task from GOIT. I don&apos;t know what else to write
        here, so here are a few anecdotes.
      </Text>
      <List>
        <Item>
          Two front-end developers are walking down the street. One says to the
          other, &quot;Did you hear about the new JavaScript framework?&quot;.
          The other replies, &quot;No, what&apos;s it called?&quot;. The first
          responds, I don&apos;t remember, it changes every week.&quot;
        </Item>
        <Item>
          A JavaScript function walks into a bar. The bartender says,
          &quot;Sorry, we don&apos;t serve functions in here.&quot; The function
          replies, &quot;That&apos;s okay, I&apos;ll just return.&quot;
        </Item>
        <Item>
          Why did the JavaScript developer wear glasses? Because he
          couldn&apos;t C#!
        </Item>
        <Item>
          Why do JavaScript developers like to code in the dark? Because they
          don&apos;t like seeing their bugs!
        </Item>
        <Item>
          Why did the JavaScript developer break up with his girlfriend? She
          kept returning undefined!
        </Item>
      </List>
    </Wrapper>
  </main>
);

export default Home;
