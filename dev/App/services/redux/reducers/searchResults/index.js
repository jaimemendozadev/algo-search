import { GOT_HITS_AND_FACETS } from "../../types.js";

const defaultSearchResultsState = {
  hits: [],
  nbPages: 0,
  page: 0
};

export const searchResults = (state = defaultSearchResultsState, action) => {
  switch (action.type) {
    case GOT_HITS_AND_FACETS:
      return Object.assign({}, state, action.payload.searchResults);
  }

  return state;
};
