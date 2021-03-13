import {AxiosInstance} from 'axios';

interface Response {
  success: string;
}

interface Props {
  axios: AxiosInstance;
  gameId: string;
  userId: string;
  onSuccess: () => void;
  onFailure: () => void;
}

const JOIN_GAME_ENDPOINT = 'join';

const joinGame = async (props: Props) => {
  const {axios, gameId, userId, onSuccess, onFailure} = props;
  try {
    const response = await axios.post<Response>(JOIN_GAME_ENDPOINT, {
      game_id: gameId,
      player_id: userId,
    });
    if (response?.data?.success && response?.data?.success === 'true') {
      onSuccess();
    } else {
      onFailure();
    }
  } catch (e) {
    onFailure();
  }
};

export default joinGame;
