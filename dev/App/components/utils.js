import instantsearch from "instantsearch.js";

const appId = process.env.ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_PUBLIC_SEARCH_API_KEY;

export const setUpInstantSearch = () => {
  const search = instantsearch({
    appId,
    apiKey,
    indexName: "app_store_index",
    routing: false
  });

  return search;
};
