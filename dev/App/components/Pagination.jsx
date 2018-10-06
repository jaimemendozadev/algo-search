import { Component, render } from "inferno";
import { connect } from "inferno-redux";
import { calculatePagination } from "./utils.jsx";

const defaultState = {
  currentPage: null,
  minimum: null,
  high: null
};

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleClick = pageNumber => {
    const { helper } = this.props;

    console.log("page number is ", pageNumber);

    this.setState(
      {
        currentPage: pageNumber
      },
      () => helper.setPage(pageNumber).search()
    );
  };

  setPaginationState = () => {
    const { page, nbPages } = this.props;
    const [minimum, high] = calculatePagination(page, nbPages);

    this.setState({
      currentPage: page,
      minimum,
      high
    });
  };

  renderPageTiles = () => {
    const { minimum, high, currentPage } = this.state;
    const tiles = [];

    let start = minimum;
    // Even if we only have one page of data, we'll create one tile
    // Pagination won't appear if both minimum/high are 0

    for (let start = minimum; start <= high; start++) {
      tiles.push(
        <div
          key={`tile-${start}`}
          onClick={() => this.handleClick(start)}
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
    const { minimum, high } = this.state;

    if (paginationSet === false) {
      return null;
    } else if (minimum === null && high === null) {
      this.setPaginationState();
    }

    console.log("this.state inside pagination ", this.state);

    return (
      <div className="pagination-container">
        <div className="pagination-first">First</div>
        <div className="pagination-previous">Previous</div>

        <div className="pagination-tiles-container">
          {this.renderPageTiles()}
        </div>

        <div className="pagination-next">Next</div>
        <div className="pagination-last">Last</div>
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
