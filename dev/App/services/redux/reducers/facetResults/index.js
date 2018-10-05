import { GOT_HITS_AND_FACETS } from "../../types.js";

const defaultFacetState = {
  facets: []
};

export const facetResults = (state = defaultFacetState, action) => {
  switch (action.type) {
    case GOT_HITS_AND_FACETS:
      return Object.assign({}, state, { facets: action.payload.facets });
  }

  return state;
};
