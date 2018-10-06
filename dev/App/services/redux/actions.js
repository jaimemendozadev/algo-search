import {
  GOT_HITS_AND_FACETS,
  MAKE_ALGOLIA_SEARCH_REQ,
  RESET_THE_FORM,
  RESET_SEARCH_FORM_REDUCER
} from "./types.js";

export const setAlgoliaFetchedData = (content, facets) => {
  const appStatus = {
    appStarted: true,
    fetchingData: false
  };

  const searchResults = {
    hits: content.hits,
    nbPages: content.nbPages,
    page: content.page
  };

  return {
    type: GOT_HITS_AND_FACETS,
    payload: {
      searchResults,
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

export const resetTheForm = () => {
  const payload = {
    resetForm: true
  };
  return {
    type: RESET_THE_FORM,
    payload
  };
};

export const resetSearchFormReducer = () => {
  return { type: RESET_SEARCH_FORM_REDUCER };
};
