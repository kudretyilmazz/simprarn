// Import Axios
import {InternalAxiosRequestConfig} from 'axios';

// Import Store
import {store} from '@store/store';

const accessTokenInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  const token = 'Bearer ' + store.getState().user?.accessToken;
  config.headers.Authorization = token;
  return config;
};

export default accessTokenInterceptor;
