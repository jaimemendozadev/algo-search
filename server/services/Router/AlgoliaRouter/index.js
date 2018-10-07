const express = require("express");
const Router = express.Router();

Router.post("/1/apps", (req, res) => {
  console.log("req.body is ", req.body);
  res.send("hit POST /api/1/apps");
});

Router.delete("/1/apps/:id", (req, res) => {
  console.log("req.params.id is ", req.params.id);
  res.send("hit DELETE /api/1/apps/:id");
});

module.exports = Router;
