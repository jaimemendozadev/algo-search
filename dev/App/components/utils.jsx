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
export const calculatePagination = (page, nbPages) => {
  const ActualPage = page + 1;
  const TotalPages = nbPages + 1;

  let minimum;
  let high;

  if (ActualPage <= 10) {
    minimum = 1;
    high = 10;

    return [minimum, high];
  }

  if (ActualPage >= 11 && ActualPage <= 100) {
    // Ideally, baseNumber * 10 should give you the minimum,
    // and (baseNumber + 1) * 10 should give you the high

    const baseNumber = ActualPage === 100 ? 9 : Math.floor(ActualPage / 10);

    // First check if possibleHigh doesn't go over TotalPages
    let possibleHigh = (baseNumber + 1) * 10;

    if (possibleHigh <= TotalPages) {
      high = possibleHigh;
      minimum = baseNumber * 10 + 1;

      return [minimum, high];

      // When we go over TotalPages, TotalPages is the high
    } else {
      high = TotalPages;

      //Check that possibleMin doesn't go below 0
      let possibleMinimum = TotalPages - 10;

      minimum = possibleMinimum >= 1 ? possibleMinimum : 1;

      return [minimum, high];
    }
  }
};
