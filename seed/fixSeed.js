const oldRecords = require("./app_seed_data.json");
const { getImageUrl } = require("./utils");

console.log("records.length is ", oldRecords.length);

const updateJSON = async () => {
  const testArray = [];

  for (let i = 0; i < 1; i++) {
    testArray.push(oldRecords[i]);
  }

  for (const app of testArray) {
    const result = await getImageUrl(app.link);
  }
};

updateJSON();
