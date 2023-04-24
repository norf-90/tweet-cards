import styled from '@emotion/styled';

export const Btn = styled.button`
  display: flex;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  background-color: transparent;
  font-size: 30px;
  text-transform: uppercase;
  color: #ed62ff;
  border: 5px solid #ed62ff;
  border-radius: 30px;
  box-shadow: 3px 3px 4px #000000, inset 3px 3px 4px #000000;
  transition: box-shadow 100ms linear, color 100ms linear ease-in-out,
    border-color 50ms linear;
  cursor: pointer;

  :active {
    color: #ed62ff;
    border-color: #ed62ff;
    box-shadow: none;
  }
`;
