const algoliasearch = require("algoliasearch");

const {
  ALGOLIA_INDEX_NAME,
  ALGOLIA_APP_ID,
  ALGOLIA_SECRET_SERVER_KEY
} = process.env;

const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SECRET_SERVER_KEY);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

module.exports = index;
