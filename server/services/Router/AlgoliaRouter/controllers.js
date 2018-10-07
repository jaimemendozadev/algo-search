const index = require("../../Algolia");
const { payloadMissingData } = require("./utils");

const addSingleObjectToIndex = async (req, res) => {
  try {
    const payload = req.body;

    const isMissing = payloadMissingData(payload);

    if (isMissing === true) {
      res.send({
        error: true,
        message: "That data you sent is invalid. Please try again."
      });
    } else {
      // Must convert Rank to Number for sorting
      const convertedRank = +payload.rank;

      payload.rank = convertedRank;

      // addObject creates single object
      // multiple object creation uses index.addObjects
      const indexResult = await index.addObject(payload);

      res.send(indexResult.objectID);
    }
  } catch (error) {
    console.log("Error adding object to Algolia index ", error);
    res.send({
      error: true,
      message: "That data you sent is invalid. Please try again."
    });
  }
};

const deleteObjectFromIndex = (req, res) => {
  console.log("hit deleteObjectFromIndex controller in DELETE /api/1/apps/:id");
  res.send("hit deleteObjectFromIndex controller in DELETE /api/1/apps/:id");
};

module.exports = {
  addSingleObjectToIndex,
  deleteObjectFromIndex
};
