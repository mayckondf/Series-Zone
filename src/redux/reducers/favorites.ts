import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      state.userFavorites[user.id!] = state.userFavorites[user.id!].sort(
        (a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        },
      );
    },
    removeFromFavorites: (state, action: PayloadAction<AddFavoritePayload>) => {
      const { show, user } = action.payload;
      state.userFavorites[user.id!] = state.userFavorites[user.id!].filter(
        _show => _show?.id !== show?.id,
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
