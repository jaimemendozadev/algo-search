const index = require("../../Algolia/");
const { payloadMissingData } = require("./utils");

const addObjectToIndex = (req, res) => {
  try {
    const payload = req.body;

    const isMissing = payloadMissingData(payload);

    if (isMissing === true) {
      res.send({
        error: true,
        message: "That data you sent is invalid. Please try again."
      });
    } else {
      res.send("hit addObjectToIndex controller in POST /api/1/apps");
    }

    // const convertedRank = +payload.rank;

    // payload.rank = convertedRank;
    // const indexResult = await index.addObjects(payload);
  } catch (error) {
    console.log("Error adding object to Algolia index ", error);
  }
};

const deleteObjectFromIndex = (req, res) => {
  console.log("hit deleteObjectFromIndex controller in DELETE /api/1/apps/:id");
  res.send("hit deleteObjectFromIndex controller in DELETE /api/1/apps/:id");
};

module.exports = {
  addObjectToIndex,
  deleteObjectFromIndex
};
