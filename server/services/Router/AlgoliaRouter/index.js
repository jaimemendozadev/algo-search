const express = require("express");
const Router = express.Router();
const {
  addSingleObjectToIndex,
  deleteObjectFromIndex
} = require("./controllers");

Router.post("/1/apps", addSingleObjectToIndex);

Router.delete("/1/apps/:id", deleteObjectFromIndex);

module.exports = Router;
