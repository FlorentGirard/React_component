//import npm 
import { combineReducers } from "redux";

//import reducer
import userReducer from './user'

const rootReducer = combineReducers({
  //recipes: recipesReducer,
  user: userReducer,
});

export default rootReducer;