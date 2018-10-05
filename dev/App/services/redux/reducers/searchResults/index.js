import { GOT_HITS_AND_FACETS } from "../../types.js";

const defaultSearchState = {
  hits: []
};

export const searchResults = (state = defaultSearchState, action) => {
  switch (action.type) {
    case GOT_HITS_AND_FACETS:
      return Object.assign({}, state, { hits: action.payload.hits });
  }

  return state;
};
