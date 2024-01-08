// Import MMKV
import {MMKV} from 'react-native-mmkv';

// Import Redux
import {Storage} from 'redux-persist';

// Storage
export const storage = new MMKV({
  id: 'user-storage',
  encryptionKey: 'simprarn-root-key',
});

// Storage For Redux Persist
export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};
