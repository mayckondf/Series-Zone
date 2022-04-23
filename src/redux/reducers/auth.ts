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
        hasPassCode: false,
        enabledBiometric: false,
      };
      state.users.push(user);
      state.currentUser = user;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.users = state.users.map(user =>
        user.id === action.payload.id ? action.payload : user,
      );
    },
    logout: state => {
      delete state.currentUser;
    },
    login: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { registerUser, updateUser, logout, login } = authSlice.actions;

export default authSlice.reducer;
