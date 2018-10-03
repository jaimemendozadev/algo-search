import { GOT_SEARCH_HIT, GOT_FACETS } from "./types.js";

const defaultSearchState = {
  hits: []
};

export const searchResults = (state = defaultSearchState, action) => {
  switch (action.type) {
    case GOT_SEARCH_HIT:
      return Object.assign({}, state, { hits: action.payload });
  }

  return state;
};

const defaultFacetState = {
  facets: []
};

export const facetResults = (state = defaultFacetState, action) => {
  switch (action.type) {
    case GOT_FACETS:
      return Object.assign({}, state, { facets: action.payload });
  }

  return state;
};
