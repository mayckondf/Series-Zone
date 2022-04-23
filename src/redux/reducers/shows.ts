import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Show } from '@src/types/app/Show';

import { ShowsStore } from '../types';

const initialState: ShowsStore = {
  currentPage: 0,
  shows: [],
};

export const showsSlice = createSlice({
  name: 'shows',
  initialState: initialState,
  reducers: {
    addShows: (state, action: PayloadAction<Show[]>) => {
      state.currentPage += 1;
      state.shows = [...state.shows, ...action.payload];
    },
  },
});

export const { addShows } = showsSlice.actions;

export default showsSlice.reducer;
