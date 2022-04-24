import { combineReducers } from 'redux';

import auth from './auth';
import error from './error';
import favorites from './favorites';
import preferences from './preferences';
import shows from './shows';

const reducers = combineReducers({
  auth,
  preferences,
  favorites,
  shows,
  error,
});

export default reducers;
