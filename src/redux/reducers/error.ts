import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Error } from '@src/types/app/Error';

import { ErrorsStore } from '../types';

const initialState: ErrorsStore = {
  errors: [],
};

export const ErrorsSlice = createSlice({
  name: 'errors',
  initialState: initialState,
  reducers: {
    addError: (state, action: PayloadAction<Error>) => {
      state.errors.push(action.payload);
    },
    removeFromErrors: (state, action: PayloadAction<Error>) => {
      state.errors = state.errors.filter(
        error => error.id !== action.payload.id,
      );
    },
  },
});

export const { addError, removeFromErrors } = ErrorsSlice.actions;

export default ErrorsSlice.reducer;
