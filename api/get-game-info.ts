import {AxiosInstance} from 'axios';

interface Response {
  // game id
  id: string;
  player_ids: string[];
  target_ids: string[];
  location: string;
  max_players: number;
  end_date: number;
}

interface Props {
  axios: AxiosInstance;
  userId: string;
  gameId: string;
  onSuccess: (response: Response) => void;
  onFailure: () => void;
}

const GAME_ENDPOINT = 'game';

const getGameInfo = async (props: Props) => {
  const {axios, userId, gameId, onSuccess, onFailure} = props;
  try {
    const response = await axios.get<Response>(
      `${GAME_ENDPOINT}/${gameId}/${userId}`,
    );
    onSuccess(response.data);
  } catch (e) {
    onFailure();
  }
};

export default getGameInfo;
