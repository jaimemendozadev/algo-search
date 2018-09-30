const express = require("express");
const app = express();
const applyMiddleware = require("./services/middleware");

applyMiddleware(app);

module.exports = app;
