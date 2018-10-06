import { Component, render } from "inferno";
import { connect } from "inferno-redux";

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

  render() {
    console.log("this.props inside Pagination ", this.props);
    return (
      <div>
        <h1>Pagination</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ pagination }) => {
  return {
    nbPages: pagination.nbPages,
    page: pagination.page,
    minimum: pagination.pagination.minimum,
    high: pagination.pagination.high
  };
};
export default connect(
  mapStateToProps,
  null
)(Pagination);
