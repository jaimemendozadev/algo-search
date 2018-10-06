import { GOT_ALGOLIA_DATA } from "../../types.js";

const defaultFacetState = {
  facets: []
};

export const facetResults = (state = defaultFacetState, action) => {
  switch (action.type) {
    case GOT_ALGOLIA_DATA:
      return Object.assign({}, state, { facets: action.payload.facets });
  }

  return state;
};
