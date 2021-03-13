import {AxiosInstance} from 'axios';

interface Response {
  // game id
  id: string;
}

interface Props {
  axios: AxiosInstance;
  name: string;
  maxPlayers: string;
  startDate: Date;
  endDate: Date;
  location: string;
  onSuccess: (response: Response) => void;
  onFailure: () => void;
}

const GAME_SETUP_ENDPOINT = 'setup';

const setupGame = async (props: Props) => {
  const {
    axios,
    name,
    maxPlayers,
    startDate,
    endDate,
    location,
    onSuccess,
    onFailure,
  } = props;
  try {
    const response = await axios.post<Response>(GAME_SETUP_ENDPOINT, {
      name,
      max_players: maxPlayers,
      start_date: Math.round(startDate.getTime() / 1000),
      end_date: Math.round(endDate.getTime() / 1000),
      location,
    });
    onSuccess(response.data);
  } catch (e) {
    onFailure();
  }
};

export default setupGame;
