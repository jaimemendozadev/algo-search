const index = require("../../Algolia/");

const addObjectToIndex = (req, res) => {
  console.log("hit addObjectToIndex controller in POST /api/1/apps");
  res.send("hit addObjectToIndex controller in POST /api/1/apps");
};

const deleteObjectFromIndex = (req, res) => {
  console.log("hit deleteObjectFromIndex controller in DELETE /api/1/apps/:id");
  res.send("hit deleteObjectFromIndex controller in DELETE /api/1/apps/:id");
};

module.exports = {
  addObjectToIndex,
  deleteObjectFromIndex
};
