// Import MMKV
import {MMKV} from 'react-native-mmkv';

// Import Config
import storageConfig from '@config/storage/storage-config';

// Storage
export const storage = new MMKV(storageConfig);
