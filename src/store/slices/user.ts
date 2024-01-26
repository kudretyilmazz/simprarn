// Import Redux
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface User {
  accessToken: string | null;
  refreshToken: string | null;
  name?: string;
  surname?: string;
}

const initialState: User = {
  accessToken: null,
  refreshToken: null,
  name: undefined,
  surname: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
    },
    setTokens: (
      state,
      action: PayloadAction<Record<string, string | null>>,
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const {setUser, setTokens} = userSlice.actions;

export default userSlice.reducer;
