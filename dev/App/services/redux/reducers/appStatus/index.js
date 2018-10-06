import { GOT_ALGOLIA_DATA, MAKE_ALGOLIA_SEARCH_REQ } from "../../types.js";

const defaultAppStatusState = {
  appStarted: false,
  fetchingData: true
};

export const appStatus = (state = defaultAppStatusState, action) => {
  switch (action.type) {
    case GOT_ALGOLIA_DATA:
      return Object.assign({}, state, action.payload.appStatus);
    case MAKE_ALGOLIA_SEARCH_REQ:
      return Object.assign({}, state, action.payload);
  }

  return state;
};
