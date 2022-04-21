import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INITIAL_LANGUAGE } from '@src/utils/constants';

import { PreferencesStore } from '../types';

const initialState = {
  language: INITIAL_LANGUAGE,
};

const preferences = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setLanguage: (
      state,
      action: PayloadAction<PreferencesStore['language']>,
    ) => {
      state.language = action.payload;
    },
    clear: () => initialState,
  },
});

export const { setLanguage, clear } = preferences.actions;
export default preferences.reducer;
