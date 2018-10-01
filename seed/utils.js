const rp = require("request-promise");
const cheerio = require("cheerio");

const getImageUrl = async uri => {
  const options = {
    uri,
    transform: body => {
      return cheerio.load(body);
    }
  };

  try {
    const result = await rp(options).then($ => {
      const fetched = $("div.l-row picture.product-hero__artwork");
      console.log("fetched is ", fetched);

      const children = fetched["0"].children;

      children.forEach(child => console.log("the child is ", child));

      return fetched;
    });

    return "Success";
  } catch (error) {
    console.log("Error fetching image URL ", error);
    return "Error";
  }
};

module.exports = {
  getImageUrl
};
