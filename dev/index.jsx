import * as inferno from "inferno";
import algoliasearch from "algoliasearch";
import { initDevTools } from "inferno-devtools";
import App from "./App/index.jsx";

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_PUBLIC_SEARCH_API_KEY
);

initDevTools();

inferno.render(
  <App algoliaClient={client} />,
  document.querySelector(".container")
);
