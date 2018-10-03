import { Component, render } from "inferno";
import { connect } from "inferno-redux";
import { setSearchResults } from "../services/redux/actions.js";

const defaultState = {
  searchTerm: "TYPE TO SEARCH"
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  checkInput = () => {
    const { searchTerm } = this.state;

    if (searchTerm == defaultState.searchTerm) {
      this.setState({ searchTerm: "" });
    } else if (searchTerm.length === 0) {
      this.setState(defaultState);
    }
  };

  handleFormChange = event => {
    const { helper } = this.state;
    const searchTerm = event.target.value;
    this.setState(
      {
        searchTerm
      },
      () => helper.setQuery(searchTerm).search()
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    const { searchTerm, helper } = this.state;

    this.setState(defaultState, () => helper.setQuery(searchTerm).search());
  };

  componentDidMount = () => {
    const { helper, SetSearchResults } = this.props;
    console.log("this.props inside CDM ", this.props);

    helper.on("result", content => {
      console.log("content is ", content);
      SetSearchResults(content);
    });

    helper.search();

    this.setState({ helper });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="search-bar-container">
        <form onSubmit={this.handleSubmit} className="searchForm">
          <input
            className="searchInput"
            onClick={this.checkInput}
            onInput={this.handleFormChange}
            type="text"
            value={searchTerm}
          />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { SetSearchResults: setSearchResults }
)(Search);
