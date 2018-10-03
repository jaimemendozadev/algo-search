import { combineReducers } from "redux";
import { searchResults, facetResults } from "./reducers.js";

const rootReducer = combineReducers({
  searchResults,
  facetResults
});

export default rootReducer;
