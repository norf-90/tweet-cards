import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 20px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 40px;
  color: #ed62ff;
  text-shadow: 7px 7px 4px #000000;
  font-weight: 900;
`;

export const Text = styled.p`
  margin: 0 0 20px;
  font-size: 25px;
  color: #ed62ff;
  text-shadow: 5px 5px 3px #000000;
  font-weight: 700;
`;

export const List = styled.ul`
  list-style: none;
  color: #f29cfe;
  font-style: italic;
  font-size: 20px;
  font-weight: 700;
`;

export const Item = styled.li`
  padding: 0 0 20px;
  text-shadow: 7px 7px 4px #000000;
`;
