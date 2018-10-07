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

const deleteSingleObjectFromIndex = async (req, res) => {
  try {
    const objID = req.params.id;

    if (!objID) {
      res.send({
        error: true,
        message:
          "There was an error with your deletion request. Please try again."
      });
    } else {
      // deleteObject deletes single object
      // multiple object deletion uses index.deleteObjects
      const deleteResponse = await index.deleteObject(objID);

      res.send(deleteResponse.objectID);
    }
  } catch (error) {
    console.log("Error deleting object from Algolia index ", error);
    res.send({
      error: true,
      message:
        "There was an error with your deletion request. Please try again."
    });
  }
};

module.exports = {
  addSingleObjectToIndex,
  deleteSingleObjectFromIndex
};
