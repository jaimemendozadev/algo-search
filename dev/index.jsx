import * as inferno from "inferno";
import algoliasearch from "algoliasearch";
import algoliasearchHelper from "algoliasearch-helper";
import { initDevTools } from "inferno-devtools";
import App from "./App/index.jsx";

const indexName = "app_store_index";

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_PUBLIC_SEARCH_API_KEY
);

const searchIndex = client.initIndex(indexName);

const helper = algoliasearchHelper(client, indexName);
helper.search();
initDevTools();

inferno.render(
  <App client={client} index={searchIndex} helper={helper} />,
  document.querySelector(".container")
);
