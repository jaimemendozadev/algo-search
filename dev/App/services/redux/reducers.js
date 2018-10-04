import { GOT_SEARCH_HIT, GOT_FACETS, CURRENT_FACET } from "./types.js";

const defaultSearchState = {
  hits: []
};

export const searchResults = (state = defaultSearchState, action) => {
  switch (action.type) {
    case GOT_SEARCH_HIT:
      return Object.assign({}, state, { hits: action.payload });
    case CURRENT_FACET:
      return Object.assign({}, state, { hits: action.payload.hits });
  }

  return state;
};

const defaultFacetState = {
  currentFacet: "",
  facets: []
};

export const facetResults = (state = defaultFacetState, action) => {
  switch (action.type) {
    case GOT_FACETS:
      return Object.assign({}, state, { facets: action.payload });
    case CURRENT_FACET:
      return Object.assign({}, state, { currentFacet: action.payload.facet });
  }

  return state;
};
