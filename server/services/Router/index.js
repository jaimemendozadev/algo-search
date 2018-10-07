const express = require("express");
const Router = express.Router();
const AlgoliaRouter = require("./AlgoliaRouter");

Router.use("/api", AlgoliaRouter);

module.exports = Router;
