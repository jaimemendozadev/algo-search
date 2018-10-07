const express = require("express");
const Router = express.Router();

Router.post("/1/apps", (req, res) => {
  console.log("req is ", req);
  res.send("hit POST /api/1/apps");
});

Router.delete("/1/apps/:id", (req, res) => {
  console.log("req is ", req);
  console.log("req.query.id is ", req.query.id);
  res.send("hit DELETE /api/1/apps/:id");
});

module.exports = Router;
