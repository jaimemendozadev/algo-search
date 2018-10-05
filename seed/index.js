require("dotenv").config();
const algoliasearch = require("algoliasearch");
const { ALGOLIA_APP_ID, ALGOLIA_SECRET_API_KEY } = process.env;
const records = require("./app_seed_data.json");

// Setup Main Index
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SECRET_API_KEY);

const index = client.initIndex("app_store_index");

// Setup Asc and Desc Indexes
const app_store_index_rank_desc = client.initIndex("app_store_index_rank_desc");
const app_store_index_rank_asc = client.initIndex("app_store_index_rank_asc");

app_store_index_rank_desc.setSettings({ ranking: ["desc(rank)"] });
app_store_index_rank_asc.setSettings({ ranking: ["asc(rank)"] });

// Forward all Main Index settings to Asc/Desc Indexes
index.setSettings(
  {
    replicas: ["app_store_index_rank_desc", "app_store_index_rank_asc"]
  },
  { forwardToReplicas: true }
);

index.addObjects(records);
