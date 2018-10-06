import { Component, render } from "inferno";
import { connect } from "inferno-redux";
import {
  makeAlgoliaSearchRequest,
  resetSearchFormReducer
} from "../services/redux/actions";

const defaultState = {
  searchTerm: "TYPE TO SEARCH"
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  makeAPICall = searchTerm => {
    const { helper, MakeAlgoliaSearchRequest } = this.props;

    helper.setQuery(searchTerm).search();
    MakeAlgoliaSearchRequest();
  };

  checkInput = () => {
    const { searchTerm } = this.state;
    const searchLength = searchTerm.length;

    if (searchTerm == defaultState.searchTerm || searchLength > 0) {
      this.setState({ searchTerm: "" });
    } else if (searchLength === 0) {
      this.setState(defaultState);
    }
  };

  handleFormChange = event => {
    const searchTerm = event.target.value;

    this.setState(
      {
        searchTerm
      },
      () => this.makeAPICall(searchTerm)
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    const { searchTerm } = this.state;

    // On submit, we fire helper.setQuery and
    // helper listens for result in App componentDidMount

    this.setState(defaultState, () => this.makeAPICall(searchTerm));
  };

  resetTheForm = resetForm => {
    const { ResetSearchFormReducer } = this.props;

    if (resetForm === true) {
      this.setState(defaultState, () => ResetSearchFormReducer());
    }
  };

  render() {
    const { searchTerm } = this.state;
    const { resetForm } = this.props;

    this.resetTheForm(resetForm);

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

const mapStateToProps = ({ searchForm }) => {
  return { resetForm: searchForm.resetForm };
};

export default connect(
  mapStateToProps,
  {
    MakeAlgoliaSearchRequest: makeAlgoliaSearchRequest,
    ResetSearchFormReducer: resetSearchFormReducer
  }
)(Search);
