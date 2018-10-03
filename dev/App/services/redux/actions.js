import { GOT_SEARCH_HIT } from "./types.js";

export const setSearchResults = ({ hits }) => {
  return {
    type: GOT_SEARCH_HIT,
    payload: hits
  };
};
