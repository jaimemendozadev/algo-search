import { GOT_SEARCH_HIT } from "./types.js";

const defaultState = {
  hits: []
};

export const searchResults = (state = defaultState, action) => {
  switch (action.type) {
    case GOT_SEARCH_HIT:
      return Object.assign({}, state, { hits: action.payload });
  }

  return state;
};
