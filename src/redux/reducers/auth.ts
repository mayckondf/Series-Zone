import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@src/types/app/User';
import dayjs from 'dayjs';

import { AuthStore } from '../types';

const initialState: AuthStore = {
  users: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      const user = { ...action.payload, id: `${dayjs().unix()}` };
      state.users.push(user);
      state.currentUser = user;
    },
  },
});

export const { registerUser } = authSlice.actions;

export default authSlice.reducer;
