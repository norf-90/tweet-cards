import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 4px solid #ed62ff;
  padding: 20px 30px;
  box-shadow: 3px 3px 4px #000000;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  margin: 0 auto;
  gap: 40px;
  font-weight: 900;
`;

export const Link = styled(NavLink)`
  font-size: 30px;
  color: #ed62ff;
  text-decoration: none;
  text-shadow: 3px 3px 4px #000000;

  &.active {
    color: #ffffff;
  }
`;
