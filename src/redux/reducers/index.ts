import { combineReducers } from 'redux';

import auth from './auth';
import preferences from './preferences';

const reducers = combineReducers({
  auth,
  preferences,
});

export default reducers;
