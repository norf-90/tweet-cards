import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  transform: translateX(-50%) translateY(-50%);
`;

export const Title = styled.h2`
  margin: 0 0 40px;
  font-size: 200px;
  color: #ffffff;
  font-weight: 900;
  text-align: center;
  text-shadow: 10px 10px 10px #000000;
`;

export const Text = styled.h2`
  margin: 0 0 20px;
  font-size: 40px;
  color: #ffffff;
  font-weight: 600;
  text-shadow: 7px 7px 4px #000000;
`;
