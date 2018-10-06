import {
  GOT_ALGOLIA_DATA,
  MAKE_ALGOLIA_SEARCH_REQ,
  RESET_THE_FORM,
  RESET_SEARCH_FORM_REDUCER
} from "./types.js";

//setAlgoliaFetchedData is workhorse action that updates majority of store
export const setAlgoliaFetchedData = (content, facets) => {
  const appStatus = {
    appStarted: true,
    fetchingData: false
  };

  const searchResults = {
    hits: content.hits
  };

  const pagination = {
    nbPages: content.nbPages,
    page: content.page
  };

  return {
    type: GOT_ALGOLIA_DATA,
    payload: {
      searchResults,
      facets,
      appStatus,
      pagination
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
