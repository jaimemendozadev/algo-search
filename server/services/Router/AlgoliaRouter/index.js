const express = require("express");
const Router = express.Router();
const {
  addSingleObjectToIndex,
  deleteSingleObjectFromIndex
} = require("./controllers");

Router.post("/1/apps", addSingleObjectToIndex);

Router.delete("/1/apps/:id", deleteSingleObjectFromIndex);

module.exports = Router;
