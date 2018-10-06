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
  renderPageTiles = () => {
    const { minimum, high } = this.state;
    const tiles = [];

    let start = minimum;

    while (start <= high) {
      tiles.push(<div className="">{start}</div>);
      start += 1;
    }

    return tiles;
  };

  componentDidMount = () => {
    const { page, nbPages } = this.props;

    const [minimum, high] = calculatePagination(page, nbPages);

    this.setState({
      currentPage: page + 1,
      minimum,
      high
    });
  };

  render() {
    console.log("this.props inside Pagination ", this.props);
    console.log("this.state inside Pagination ", this.state);
    const { minimum, high } = this.state;

    if (!minimum && !high) {
      return null;
    }

    return (
      <div className="pagination-container">
        <div className="pagination-first">First</div>
        <div className="pagination-previous">Previous</div>
        <div className="pagination-tiles">{this.renderPageTiles()}</div>

        <div className="pagination-next">Next</div>
        <div className="pagination-last">Last</div>
      </div>
    );
  }
}

const mapStateToProps = ({ pagination }) => {
  return {
    nbPages: pagination.nbPages,
    page: pagination.page
  };
};
export default connect(
  mapStateToProps,
  null
)(Pagination);
