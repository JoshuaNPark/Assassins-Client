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
  onSuccess: (response: Response) => void;
  onFailure: () => void;
}

const USER_ENDPOINT = 'user';

const getUser = async (props: Props) => {
  const {axios, userId, onSuccess, onFailure} = props;
  try {
    const response = await axios.get<Response>(`${USER_ENDPOINT}/${userId}`);
    onSuccess(response.data);
  } catch (e) {
    onFailure();
  }
};

export default getUser;
