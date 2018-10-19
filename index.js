if (process.env.NODE_ENV !== "production") require("dotenv").config();
const app = require("./server");

app.listen(process.env.PORT || 3000, () =>
  console.log(`Listening at http://localhost:${process.env.PORT || 3000}`)
);
