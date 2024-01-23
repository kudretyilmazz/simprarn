// Import MMKV
import {MMKV} from 'react-native-mmkv';

// Storage
export const storage = new MMKV({
  id: 'user-storage',
  encryptionKey: 'simprarn-root-key',
});
