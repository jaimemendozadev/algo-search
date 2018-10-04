import * as inferno from "inferno";
import algoliasearch from "algoliasearch";
import algoliasearchHelper from "algoliasearch-helper";
import { initDevTools } from "inferno-devtools";
import { Provider } from "inferno-redux";
import { createStore } from "redux";
import App from "./App/App.jsx";
import rootReducer from "./App/services/redux";

const store = createStore(rootReducer);

const indexName = "app_store_index";
const helperOptions = { facets: ["category"] };

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_PUBLIC_SEARCH_API_KEY
);

const helper = algoliasearchHelper(client, indexName, helperOptions);

helper.search();

initDevTools();

inferno.render(
  <Provider store={store}>
    <App client={client} helper={helper} />
  </Provider>,
  document.querySelector(".container")
);
