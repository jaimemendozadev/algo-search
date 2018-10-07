import { Component, render } from "inferno";
import { connect } from "inferno-redux";
import { calculatePagination } from "./utils.jsx";

const defaultState = {
  currentPage: null,
  totalPages: null,
  minimum: null,
  high: null
};

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handlePageClick = pageNumber => {
    const { helper } = this.props;

    helper.setPage(pageNumber).search();
  };

  handleButtonClick = buttonType => {
    const { page, nbPages } = this.props;
    const currentPage = page;
    const totalPages = nbPages;
    const nextPage = currentPage + 1;
    const lastPage = totalPages - 1;

    // First Previous Next Last

    if (buttonType === "First") {
      this.handlePageClick(0);
    }

    if (buttonType === "Previous" && !(currentPage - 1 < 0)) {
      console.log("inside Previous conditional");
      this.handlePageClick(currentPage - 1);
    }

    if (buttonType === "Next" && !(nextPage >= totalPages)) {
      this.handlePageClick(nextPage);
    }

    if (buttonType === "Last") {
      this.handlePageClick(lastPage);
    }
  };

  renderPageTiles = () => {
    const { page, nbPages } = this.props;
    const currentPage = page;

    const [minimum, high] = calculatePagination(page, nbPages);

    const tiles = [];

    // Even if we only have one page of data, we'll create one tile
    // Pagination won't appear if both minimum/high are 0

    for (let start = minimum; start < high; start++) {
      tiles.push(
        <div
          key={`tile-${start}`}
          onClick={() => this.handlePageClick(start)}
          className={`pagination-tiles ${
            start === currentPage ? "current-tile" : ""
          }`}
        >
          {start + 1}
        </div>
      );
    }
    return tiles;
  };

  render() {
    const { paginationSet } = this.props;

    if (paginationSet === false) {
      return null;
    }

    return (
      <div className="pagination-container">
        <div
          onClick={() => this.handleButtonClick("First")}
          className="pagination-first"
        >
          First
        </div>
        <div
          onClick={() => this.handleButtonClick("Previous")}
          className="pagination-previous"
        >
          Previous
        </div>

        <div className="pagination-tiles-container">
          {this.renderPageTiles()}
        </div>

        <div
          onClick={() => this.handleButtonClick("Next")}
          className="pagination-next"
        >
          Next
        </div>
        <div
          onClick={() => this.handleButtonClick("Last")}
          className="pagination-last"
        >
          Last
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ pagination }) => {
  return {
    nbPages: pagination.nbPages,
    page: pagination.page,
    paginationSet: pagination.paginationSet
  };
};
export default connect(
  mapStateToProps,
  null
)(Pagination);
