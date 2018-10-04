import { Component, render } from "inferno";

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
    const { helper } = this.props;
    const searchTerm = event.target.value;

    // On submit, we fire helper.setQuery and
    // helper listens for result in App componentDidMount
    this.setState(
      {
        searchTerm
      },
      () => helper.setQuery(searchTerm).search()
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    const { searchTerm } = this.state;
    const { helper } = this.props;

    this.setState(defaultState, () => helper.setQuery(searchTerm).search());
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

export default Search;
