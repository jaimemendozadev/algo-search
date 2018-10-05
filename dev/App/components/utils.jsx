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

export const setDropdownClass = hideDropdown => {
  return `btn-dropdown ${hideDropdown ? "hideDropdown" : ""}`;
};
