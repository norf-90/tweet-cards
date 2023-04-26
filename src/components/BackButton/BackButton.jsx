import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Btn } from './BackButton.styled';

const BackButton = ({ title }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  return (
    <Btn type="button" onClick={handleClick}>
      {title}
    </Btn>
  );
};

export default BackButton;

BackButton.propTypes = {
  title: PropTypes.string.isRequired,
};
