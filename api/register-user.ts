import {AxiosInstance} from 'axios';

interface Response {
  // user id
  id: string;
}

interface Props {
  axios: AxiosInstance;
  userId: string;
  name: string;
  bio: string;
  favouriteLocation: string;
  onSuccess: (response: Response) => void;
  // called on duplicate id
  onFailure: () => void;
}

const REGISTER_ENDPOINT = 'register';

const registerUser = async (props: Props) => {
  const {
    axios,
    userId,
    name,
    bio,
    favouriteLocation,
    onSuccess,
    onFailure,
  } = props;
  try {
    const response = await axios.post<Response>(REGISTER_ENDPOINT, {
      id: userId,
      name,
      bio,
      favourite_location: favouriteLocation,
    });
    onSuccess(response.data);
  } catch (e) {
    onFailure();
  }
};

export default registerUser;
