import { GOT_ALGOLIA_DATA } from "../../types";

const defaultPaginationState = {
  nbPages: null,
  page: null,
  paginationSet: false
};

export const pagination = (state = defaultPaginationState, action) => {
  switch (action.type) {
    case GOT_ALGOLIA_DATA:
      return Object.assign({}, state, action.payload.pagination);
  }

  return state;
};
