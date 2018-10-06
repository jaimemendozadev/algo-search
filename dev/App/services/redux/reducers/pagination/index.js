import { GOT_ALGOLIA_DATA } from "../../types";

const defaultPaginationState = {
  nbPages: 0,
  page: 0
};

export const pagination = (state = defaultPaginationState, action) => {
  switch (action.type) {
    case GOT_ALGOLIA_DATA:
      return Object.assign({}, state, action.payload.pagination);
  }

  return state;
};
