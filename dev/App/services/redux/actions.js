import { GOT_HITS_AND_FACETS, MAKE_ALGOLIA_SEARCH_REQ } from "./types.js";

export const setHitsCategoriesAppStatus = (hits, facets) => {
  const appStatus = {
    appStarted: true,
    fetchingData: false
  };

  return {
    type: GOT_HITS_AND_FACETS,
    payload: {
      hits,
      facets,
      appStatus
    }
  };
};

export const makeAlgoliaSearchRequest = () => {
  const payload = { fetchingData: true };
  return {
    type: MAKE_ALGOLIA_SEARCH_REQ,
    payload
  };
};
