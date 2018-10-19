if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const algoliasearch = require("algoliasearch");
const {
  ALGOLIA_APP_ID,
  ALGOLIA_SECRET_API_KEY,
  ALGOLIA_INDEX_NAME
} = process.env;
const records = require("./app_seed_data.json");

const ASC_INDEX_NAME = `${ALGOLIA_INDEX_NAME}_rank_asc`;
const DESC_INDEX_NAME = `${ALGOLIA_INDEX_NAME}_rank_desc`;

const seedAlgoliaIndex = async () => {
  // Setup Main Index
  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SECRET_API_KEY);

  const index = client.initIndex(ALGOLIA_INDEX_NAME);

  // Setup Asc and Desc Indexes
  const app_store_index_rank_asc = client.initIndex(ASC_INDEX_NAME);
  const app_store_index_rank_desc = client.initIndex(DESC_INDEX_NAME);

  app_store_index_rank_asc.setSettings({ ranking: ["asc(rank)"] });

  app_store_index_rank_desc.setSettings({ ranking: ["desc(rank)"] });

  app_store_index_rank_asc.setSettings({ attributesForFaceting: ["category"] });

  app_store_index_rank_desc.setSettings({
    attributesForFaceting: ["category"]
  });

  index.setSettings({
    searchableAttributes: ["name", "category"]
  });

  index.setSettings({ attributesForFaceting: ["category"] });

  // Forward all Main Index settings to Asc/Desc Indexes
  index.setSettings(
    {
      replicas: [DESC_INDEX_NAME, ASC_INDEX_NAME]
    },
    { forwardToReplicas: true }
  );

  await index.addObjects(records);

  console.log("Algolia Index has Seed Data!");
};

seedAlgoliaIndex();
