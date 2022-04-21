import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@src/types/app/User';

import { AuthStore } from '../types';

const initialState: AuthStore = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
