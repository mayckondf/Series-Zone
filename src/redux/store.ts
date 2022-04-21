import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { persistReducers } from './persistReducer';
import reducers from './reducers';

const store = configureStore({
  reducer: persistReducers(reducers),
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  enhancers:
    __DEV__ && console.tron?.createEnhancer
      ? [console.tron?.createEnhancer()]
      : undefined,
});

const persist = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { persist };
export default store;
