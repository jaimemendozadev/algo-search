import { Component, render } from "inferno";

const defaultState = {
  hideDropdown: false
};

class SortBy extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  render() {
    const { hideDropdown } = this.state;
    return (
      <div className="sortby-container">
        <div className="sortby-row sortby-header-container">
          <h1>SortBy</h1>
        </div>

        <div className={`btn-dropdown ${hideDropdown ? "hideDropdown" : ""}`}>
          <div className="btn">Asc. Rank</div>
          <div className="btn">Desc. Rank</div>
        </div>
      </div>
    );
  }
}

export default SortBy;
