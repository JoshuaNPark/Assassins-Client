import {AxiosInstance} from 'axios';

interface Response {
  id: string;
  game_id: string;
}

interface Props {
  axios: AxiosInstance;
  userId: string;
  onSuccess: (response: Response) => void;
  onFailure: () => void;
}

const LOGIN_ENDPOINT = 'user';

const login = async (props: Props) => {
  const {axios, userId, onSuccess, onFailure} = props;
  try {
    const response = await axios.post<Response>(LOGIN_ENDPOINT, {
      id: userId,
    });
    onSuccess(response.data);
  } catch (e) {
    onFailure();
  }
};

export default login;
