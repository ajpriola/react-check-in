import { combineReducers } from 'redux';
import patients from './patients';
import serving from './serving';

const reducers = combineReducers({
  patients,
  serving
});

export default reducers;
