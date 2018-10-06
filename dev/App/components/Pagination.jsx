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
  renderPageTiles = () => {};

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
        <h1>Pagination</h1>
        <div>
          <div>First</div>
          <div>Previous</div>

          <div>Next</div>
          <div>Last</div>
        </div>
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
