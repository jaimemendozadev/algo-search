import { GOT_SEARCH_HIT, GOT_FACETS } from "./types.js";

export const setSearchResults = ({ hits }) => {
  return {
    type: GOT_SEARCH_HIT,
    payload: hits
  };
};

export const setFacetCategories = facets => {
  return {
    type: GOT_FACETS,
    payload: facets
  };
};
