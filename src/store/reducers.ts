// Import Redux
import {combineReducers} from '@reduxjs/toolkit';

// Import Reducers
import theme from '@store/slices/theme';
import localization from '@store/slices/localization';
import user from '@store/slices/user';

// Reducers
const reducers = combineReducers({
  theme: theme,
  localization: localization,
  user: user,
});

export default reducers;
