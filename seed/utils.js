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
      const fetched = $(".l-column.small-5.medium-4.large-3.small-valign-top");

      console.log("fetched is ", fetched.html());

      const imageURL = fetched.find("img").attr("src");

      console.log("imageURL is ", imageURL);

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
