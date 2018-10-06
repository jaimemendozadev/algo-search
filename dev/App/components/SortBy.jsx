import { Component, render } from "inferno";
import { connect } from "inferno-redux";
import { hideElement, displayCurrentSetting } from "./utils.jsx";
import { resetTheForm } from "../services/redux/actions";

const defaultState = {
  hideDropdown: true,
  sortBy: null
};

class SortBy extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  toggleDropdown = () => {
    const { hideDropdown } = this.state;

    this.setState({ hideDropdown: !hideDropdown });
  };

  resetDropdown = () => {
    const { helper, ResetTheForm } = this.props;
    // Fix hardcoded value

    this.setState(defaultState, () => {
      helper
        .setIndex("app_store_index")
        .setQuery("")
        .search();
      ResetTheForm();
    });
  };

  handleTabClick = index => {
    const { helper, hideDropdown } = this.props;

    const indexKey = {
      "Asc. Rank": "app_store_index_rank_asc",
      "Desc. Rank": "app_store_index_rank_desc"
    };

    this.setState(
      {
        sortBy: index,
        hideDropdown: !hideDropdown
      },
      () => helper.setIndex(indexKey[index]).search()
    );
  };

  render() {
    const { hideDropdown, sortBy } = this.state;

    return (
      <div className="sortby-container">
        <div onClick={this.toggleDropdown} className="sortby-header-container">
          <div className="sortby-header">SortBy</div>

          {displayCurrentSetting(hideDropdown, sortBy)}
        </div>

        <div
          className={`sortby-reset ${hideElement(!hideDropdown)}`}
          onClick={this.resetDropdown}
        >
          Reset SortBy Filter
        </div>

        <div className={`btn-dropdown ${hideElement(hideDropdown)}`}>
          <div onClick={() => this.handleTabClick("Asc. Rank")} className="btn">
            <span>Asc. Rank</span>
          </div>
          <div
            onClick={() => this.handleTabClick("Desc. Rank")}
            className="btn"
          >
            <span>Desc. Rank</span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { ResetTheForm: resetTheForm }
)(SortBy);
