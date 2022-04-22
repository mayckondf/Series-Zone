import { combineReducers } from 'redux';

import auth from './auth';
import preferences from './preferences';
import shows from './shows';

const reducers = combineReducers({
  auth,
  preferences,
  shows,
});

export default reducers;
