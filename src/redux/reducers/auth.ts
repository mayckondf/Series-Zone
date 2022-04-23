import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@src/types/app/User';
import dayjs from 'dayjs';

import { AuthStore, UserPayload } from '../types';

const initialState: AuthStore = {
  users: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<UserPayload>) => {
      const user: User = {
        ...action.payload,
        id: `${dayjs().unix()}`,
        createdAt: dayjs().toISOString(),
      };
      state.users.push(user);
      state.currentUser = user;
    },
    logout: state => {
      delete state.currentUser;
    },
    login: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { registerUser, logout, login } = authSlice.actions;

export default authSlice.reducer;
