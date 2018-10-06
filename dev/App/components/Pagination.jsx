import { Component, render } from "inferno";

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
    return (
      <div>
        <h1>Pagination</h1>
      </div>
    );
  }
}

export default Pagination;
