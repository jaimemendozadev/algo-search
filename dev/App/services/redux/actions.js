import { GOT_SEARCH_HIT, GOT_FACETS, CURRENT_FACET } from "./types.js";

export const setSearchResults = ({ hits }) => {
  return {
    type: GOT_SEARCH_HIT,
    payload: hits
  };
};

export const setCurrentFacetCategory = facet => {
  return {
    type: CURRENT_FACET,
    payload: facet
  };
};

export const setFacetCategories = facets => {
  return {
    type: GOT_FACETS,
    payload: facets
  };
};
