import { GOT_HITS_AND_FACETS } from "../../types.js";

const defaultAppStatusState = {
  appStarted: false
};

export const appStatus = (state = defaultAppStatusState, action) => {
  switch (action.type) {
    case GOT_HITS_AND_FACETS:
      return Object.assign({}, state, { appStarted: action.payload });
  }

  return state;
};
