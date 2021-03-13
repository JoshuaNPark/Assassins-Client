import {AxiosInstance} from 'axios';

interface Response {
  //user id
  id: string;
  qr_hash: string;
}

interface Props {
  axios: AxiosInstance;
  userId: string;
  onSuccess: (response: Response) => void;
  onFailure: () => void;
}

const QR_ENDPOINT = 'qr';

const getQr = async (props: Props) => {
  const {axios, userId, onSuccess, onFailure} = props;
  try {
    const response = await axios.get<Response>(`${QR_ENDPOINT}/${userId}`);
    onSuccess(response.data);
  } catch (e) {
    onFailure();
  }
};

export default getQr;
