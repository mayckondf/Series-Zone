import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Show } from '@src/types/app/Show';

import store from '../store';
import { AddFavoritePayload, FavoritesStore } from '../types';

const initialState: FavoritesStore = {
  userFavorites: {},
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<AddFavoritePayload>) => {
      const { show, user } = action.payload;
      if (!state.userFavorites[user.id!]) {
        state.userFavorites[user.id!] = [];
      }
      state.userFavorites[user.id!].push(show);
      return state;
    },
    removeFromFavorites: (state, action: PayloadAction<AddFavoritePayload>) => {
      const { show, user } = action.payload;
      state.userFavorites[user.id!] = state.userFavorites[user.id!].filter(
        _show => _show.id !== show.id,
      );
      return state;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
