// Import Redux
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface User {
  isLoggedIn: boolean;
  name?: string;
  surname?: string;
}

const initialState: User = {
  isLoggedIn: false,
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
    setLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {setUser, setLoginStatus} = userSlice.actions;

export default userSlice.reducer;
