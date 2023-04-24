import axios from 'axios';

const BASE_URL = 'https://644646d10431e885f00d8e3d.mockapi.io/following-list';

const getFollowingList = async () => {
  const responce = await axios.get(BASE_URL);
  return responce.data;
};

const putFollowingList = async array => {
  await axios.put(`${BASE_URL}/1`, { list: array });
};

export { getFollowingList, putFollowingList };
