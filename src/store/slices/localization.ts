// Import Redux
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

// Import RN Localize
import {findBestLanguageTag} from 'react-native-localize';

// Import Constants
import {LOCALES} from '@common/constants/locales';

// Initial Locale
const initialLocale: LOCALES =
  findBestLanguageTag([LOCALES.TR, LOCALES.EN])?.languageTag || LOCALES.TR;

export interface localization {
  locale: LOCALES;
}

const initialState: localization = {
  locale: initialLocale,
};

export const localizationSlice = createSlice({
  name: 'localization',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<LOCALES>) => {
      state.locale = action.payload;
    },
  },
});

export const {setLocale} = localizationSlice.actions;

export default localizationSlice.reducer;
