import { GOT_HITS_AND_FACETS } from "./types.js";

export const setHitsCategoriesAppStatus = (hits, facets) => {
  const appStarted = true;

  return {
    type: GOT_HITS_AND_FACETS,
    payload: {
      hits,
      facets,
      appStarted
    }
  };
};
