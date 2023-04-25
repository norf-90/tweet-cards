import React from 'react';

import { Container, Title, Select } from './Panel.styled';
import BackButton from '../BackButton/BackButton';

const Panel = ({ handleFilterChange }) => (
  <Container>
    <Title htmlFor="filter">Show:</Title>
    <Select name="filter" id="filter" onChange={handleFilterChange}>
      <option value="all">all</option>
      <option value="following">following</option>
      <option value="follow">follow</option>
    </Select>

    <BackButton title="Back to Home" />
  </Container>
);

export default Panel;
