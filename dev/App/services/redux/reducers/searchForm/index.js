import { RESET_THE_FORM, RESET_SEARCH_FORM_REDUCER } from "../../types.js";

const defaultSearchFormState = {
  resetForm: false
};

export const searchForm = (state = defaultSearchFormState, action) => {
  switch (action.type) {
    case RESET_THE_FORM:
      return Object.assign({}, state, action.payload);

    case RESET_SEARCH_FORM_REDUCER:
      return defaultSearchFormState;
  }

  return state;
};
