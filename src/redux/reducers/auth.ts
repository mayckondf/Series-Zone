import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@src/types/app/User';

import { AuthStore } from '../types';

const initialState: AuthStore = {
  users: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      state.currentUser = action.payload;
    },
  },
});

export const { registerUser } = authSlice.actions;

export default authSlice.reducer;
