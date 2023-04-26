import PropTypes from 'prop-types';
import React from 'react';

import { Btn } from './LoadMoreBtn.styled';

const LoadMoreBtn = ({ handleClick }) => (
  <Btn type="button" onClick={handleClick}>
    Load More
  </Btn>
);

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
