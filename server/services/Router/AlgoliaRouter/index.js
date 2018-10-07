const express = require("express");
const Router = express.Router();
const { addObjectToIndex, deleteObjectFromIndex } = require("./controllers");

Router.post("/1/apps", addObjectToIndex);

Router.delete("/1/apps/:id", deleteObjectFromIndex);

module.exports = Router;
