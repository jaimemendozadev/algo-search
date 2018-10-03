import { combineReducers } from "redux";
import { searchResults } from "./reducers.js";

const rootReducer = combineReducers({
  searchResults
});

export default rootReducer;
