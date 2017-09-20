import { combineReducers } from 'redux';
import postits from './postits'
import nextId from './nextId'; // normally this would be handled by our database
import filter from './filter';


const rootReducer = combineReducers({
  // same as postits: postits in ES6
  postits,
  nextId,
  filter,
});

export default rootReducer;
