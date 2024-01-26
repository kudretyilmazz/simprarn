// Import Axios
import axios, {AxiosError} from 'axios';

// Import Store
import {store} from '@store/store';
import {setTokens} from '@store/slices/user';

// Import Envs
import {BASE_URL} from '@env';

const getNewTokens = async () =>
  axios.request({
    baseURL: BASE_URL,
    url: '/auth/refresh-token',
    data: {
      refreshToken: store.getState().user?.refreshToken,
    },
  });

const refreshTokenInterceptor = async (error: AxiosError<any>) => {
  const expireStatus = error?.response?.status === 401;
  const expireCode = error?.response?.data?.code === 'TOKEN_EXPIRED';

  if (expireStatus && expireCode) {
    const originalRequest = error?.config;
    const isRefreshRequest = originalRequest?.url?.endsWith('/refresh-token');

    const tokens = await getNewTokens();
    const accessToken = tokens?.data?.access_token;
    const refreshToken = tokens?.data?.refresh_token;

    if (originalRequest && accessToken && refreshToken && !isRefreshRequest) {
      originalRequest.headers.Authorization = 'Bearer ' + accessToken;
      originalRequest.baseURL = BASE_URL;

      store.dispatch(
        setTokens({
          accessToken: accessToken,
          refreshToken: refreshToken,
        }),
      );

      return axios.request(originalRequest);
    }

    // Logout
    store.dispatch(
      setTokens({
        accessToken: null,
        refreshToken: null,
      }),
    );
  }
  return error;
};

export default refreshTokenInterceptor;
