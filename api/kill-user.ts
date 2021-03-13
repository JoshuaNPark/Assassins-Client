import {AxiosInstance} from 'axios';

interface Response {
  success: string;
}

interface Props {
  axios: AxiosInstance;
  gameId: string;
  killerId: string;
  victimQrHash: string;
  onSuccess: () => void;
  onFailure: () => void;
}

const KILL_ENDPOINT = 'kill';

const killUser = async (props: Props) => {
  const {axios, gameId, killerId, victimQrHash, onSuccess, onFailure} = props;
  try {
    const response = await axios.post<Response>(KILL_ENDPOINT, {
      game_id: gameId,
      killer_id: killerId,
      victim_qr_hash: victimQrHash,
    });
    if (response?.data?.success && response.data.success === 'success') {
      onSuccess();
    } else {
      onFailure();
    }
  } catch (e) {
    onFailure();
  }
};

export default killUser;
