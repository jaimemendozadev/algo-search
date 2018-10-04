const oldRecords = require("./app_seed_data.json");
const { getImageUrl } = require("./utils");

console.log("records.length is ", oldRecords.length);

const updateJSON = async () => {
  const testArray = [];
  const newData = [];

  for (let i = 500; i < 505; i++) {
    testArray.push(oldRecords[i]);
  }

  for (const app of testArray) {
    const result = await getImageUrl(app.link);
    app.link = result.length === 0 ? "" : result;
    newData.push(app);
  }

  console.log("newData ", newData);
};

updateJSON();
