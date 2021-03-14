import {AxiosInstance} from 'axios';

interface Response {
  //user id
  id: string;
  name: string;
  bio: string;
  favourite_location: string;
  game_id: string;
}

interface Props {
  axios: AxiosInstance;
  userId: string;
}

const USER_ENDPOINT = 'user';

const getUser = async (props: Props) => {
  const {axios, userId} = props;
  return await axios.get<Response>(`${USER_ENDPOINT}/${userId}`);
};

export default getUser;
