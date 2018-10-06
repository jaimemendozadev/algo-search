import { GOT_ALGOLIA_DATA } from "../../types.js";

const defaultSearchResultsState = {
  hits: []
};

export const searchResults = (state = defaultSearchResultsState, action) => {
  switch (action.type) {
    case GOT_ALGOLIA_DATA:
      return Object.assign({}, state, action.payload.searchResults);
  }

  return state;
};
