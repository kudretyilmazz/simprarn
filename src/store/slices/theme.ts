// Import React Native
import {Appearance} from 'react-native';

// Import Redux
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

// Import Constants
import {THEMES} from '@common/constants/themes';

export interface theme {
  theme: THEMES;
}

const initialState: theme = {
  theme: Appearance.getColorScheme() === 'dark' ? THEMES.DARK : THEMES.LIGHT,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<THEMES>) => {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;

export default themeSlice.reducer;
