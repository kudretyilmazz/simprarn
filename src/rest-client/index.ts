// Import Axios
import axios from 'axios';

// Import Interceptors
import accessTokenInterceptor from '@rest-client/interceptors/accessToken';
import refreshTokenInterceptor from '@rest-client/interceptors/refreshToken';

// Import Envs
import {BASE_URL} from '@env';

const RestClient = axios.create({
  baseURL: BASE_URL,
});

// Apply Interceptors
RestClient.interceptors.request.use(accessTokenInterceptor);
RestClient.interceptors.response.use(
  response => response,
  refreshTokenInterceptor,
);

export default RestClient;
