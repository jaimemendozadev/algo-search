require("dotenv").config();
const algoliasearch = require("algoliasearch");
const { ALGOLIA_APP_ID, ALGOLIA_SECRET_API_KEY } = process.env;
const records = require("./app_seed_data.json");

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SECRET_API_KEY);

const index = client.initIndex("app_store_index");

index.addObjects(records);
