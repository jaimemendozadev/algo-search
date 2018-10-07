import DownArrow from "./assets/down-arrow.svg";
import UpArrow from "./assets/up-arrow.svg";

export const getImg = hideDropdown => {
  return hideDropdown === true ? (
    <img src={DownArrow} />
  ) : (
    <img src={UpArrow} className="up-arrow" />
  );
};

export const displayCurrentSetting = (hideDropdown, sortBy) => {
  return (
    <span
      className={`sortby-current-setting ${
        sortBy === null ? "null-current-setting" : "asc-desc-setting"
      }`}
    >
      {sortBy}
      {getImg(hideDropdown)}
    </span>
  );
};

export const hideElement = hideElement => {
  return hideElement ? "hideElement" : "";
};

// calculatePagination currently only works for
// indexes with less than 101 pages of results
// page starts at 0 index
export const calculatePagination = (page, nbPages) => {
  console.log("page inside calculatePag ", page);
  console.log("nbPages inside calculatePage", nbPages);

  const TotalPages = nbPages;

  // Edge Case: when we only have one page of data
  if (page === 0 && TotalPages === 1) {
    return [0, 1];
  }

  let minimum;
  let high;

  // When we're on pages 1 - 10, adjust high based
  // on how many of pages we can query.
  if (page <= 9) {
    high = TotalPages >= 10 ? 10 : TotalPages;
    minimum = 0;

    return [minimum, high];
  }

  if (page >= 10 && page <= 99) {
    // Whatever the page number is, divide / 10
    const baseNumber = Math.floor(page / 10);

    // Calculate the high & make sure we don't
    // go over the totalPages
    let high = (baseNumber + 1) * 10;
    high = high <= TotalPages ? high : TotalPages;

    let minimum = baseNumber * 10;

    console.log("minimum is ", minimum);
    console.log("high is ", high);

    return [minimum, high];
  }
};
