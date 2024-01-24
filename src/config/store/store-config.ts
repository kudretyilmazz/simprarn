// Import Storage
import {reduxStorage} from '@store/reduxStorage';

export const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['theme', 'localization', 'user'],
};
