import { Component, render } from "inferno";

const defaultState = {
  hideDropdown: true
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

  handleButtonClick = event => {
    console.log("inside handleButtonClick!");
  };

  render() {
    const { hideDropdown } = this.state;
    return (
      <div className="sortby-container">
        <div onClick={this.toggleDropdown} className="sortby-header-container">
          <div className="sortby-header">SortBy</div>
        </div>

        <div className={`btn-dropdown ${hideDropdown ? "hideDropdown" : ""}`}>
          <div onClick={this.handleButtonClick} className="btn">
            <span>Asc. Rank</span>
          </div>
          <div onClick={this.handleButtonClick} className="btn">
            <span>Desc. Rank</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SortBy;
