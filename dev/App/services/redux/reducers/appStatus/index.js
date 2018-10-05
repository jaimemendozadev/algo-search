import { GOT_HITS_AND_FACETS, MAKE_ALGOLIA_SEARCH_REQ } from "../../types.js";

const defaultAppStatusState = {
  appStarted: false,
  fetchingData: true
};

export const appStatus = (state = defaultAppStatusState, action) => {
  switch (action.type) {
    case GOT_HITS_AND_FACETS:
      return Object.assign({}, state, action.payload.appStatus);
    case MAKE_ALGOLIA_SEARCH_REQ:
      return Object.assign({}, state, action.payload);
  }

  return state;
};
