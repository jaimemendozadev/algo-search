import { GOT_HITS_AND_FACETS } from "./types.js";

export const setHitsAndCategories = (hits, facets) => {
  return {
    type: GOT_HITS_AND_FACETS,
    payload: {
      hits,
      facets
    }
  };
};
