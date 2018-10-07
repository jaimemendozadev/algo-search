const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const publicDir = path.resolve(__dirname, "../../../public");
const MainRouter = require("../Router");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(publicDir));
  app.use(MainRouter);
};
