// Import React Native
import {Appearance} from 'react-native';

// Import Redux
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

// Import Constants
import {THEMES} from 'src/app/common/constants/theme/themes';

export interface theme {
  theme: THEMES;
  user: null | Record<string, string>;
}

const initialState: theme = {
  theme: Appearance.getColorScheme() === 'dark' ? THEMES.DARK : THEMES.LIGHT,
  user: null,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<THEMES>) => {
      state.theme = action.payload;
    },
    setTheme2: (state, _action: PayloadAction<THEMES>) => {
      state.user = {};
    },
  },
});

export const {setTheme} = themeSlice.actions;

export default themeSlice.reducer;
