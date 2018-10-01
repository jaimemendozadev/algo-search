import * as inferno from "inferno";
import algoliasearch from "algoliasearch";
import { initDevTools } from "inferno-devtools";
import App from "./App/index.jsx";

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_PUBLIC_SEARCH_API_KEY
);

const index = client.initIndex("app_store_index");

initDevTools();

inferno.render(
  <App client={client} index={index} />,
  document.querySelector(".container")
);
