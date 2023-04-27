import styled from '@emotion/styled';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  background-color: transparent;
  font-size: 20px;
  text-transform: uppercase;
  color: #ed62ff;
  border: 5px solid #ed62ff;
  border-radius: 30px;
  box-shadow: 3px 3px 4px #000000, inset 3px 3px 4px #000000;
  transition: box-shadow 100ms linear, color 300ms linear,
    border-color 300ms linear;
  cursor: pointer;

  :hover,
  :focus {
    color: #ffffff;
    box-shadow: 6px 6px 4px #000000, inset 6px 6px 4px #000000;
  }
`;
