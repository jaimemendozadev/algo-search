require("dotenv").config();
const algoliasearch = require("algoliasearch");
const {
  ALGOLIA_APP_ID,
  ALGOLIA_SECRET_API_KEY,
  ALGOLIA_INDEX_NAME
} = process.env;
const records = require("./app_seed_data.json");

const ASC_INDEX_NAME = `${ALGOLIA_INDEX_NAME}_asc`;
const DESC_INDEX_NAME = `${ALGOLIA_INDEX_NAME}_desc`;

// Setup Main Index
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SECRET_API_KEY);

const index = client.initIndex(ALGOLIA_INDEX_NAME);

// Setup Asc and Desc Indexes
const app_store_index_rank_desc = client.initIndex(ASC_INDEX_NAME);
const app_store_index_rank_asc = client.initIndex(DESC_INDEX_NAME);

app_store_index_rank_desc.setSettings({ ranking: ["desc(rank)"] });
app_store_index_rank_asc.setSettings({ ranking: ["asc(rank)"] });

// Forward all Main Index settings to Asc/Desc Indexes
index.setSettings(
  {
    replicas: [DESC_INDEX_NAME, ASC_INDEX_NAME]
  },
  { forwardToReplicas: true }
);

index.addObjects(records);
