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
    const { helper } = this.state;
    const searchTerm = event.target.value;
    this.setState(
      {
        searchTerm
      },
      () => helper.setQuery(searchTerm).search()
    );
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { searchTerm } = this.state;
    const { index, callback } = this.props;

    this.setState(defaultState);

    const searchResults = await index.search(searchTerm);

    console.log("searchResults are ", searchResults);

    callback(searchResults.hits);
  };

  componentDidMount = () => {
    const { helper } = this.props;
    const { callback } = this.props;

    helper.on("result", content => {
      console.log("content is ", content);
      callback(content.hits);
    });

    this.setState({ helper });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="search-bar-container">
        <h1>Search Bar</h1>
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
