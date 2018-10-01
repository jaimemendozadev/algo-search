import { Component, render } from "inferno";

const defaultState = {
  formValue: "TYPE TO SEARCH"
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  checkInput = event => {
    const { formValue } = this.state;

    if (formValue == defaultState.formValue) {
      this.setState({ formValue: "" });
    } else if (formValue.length === 0) {
      this.setState(defaultState);
    }
  };

  handleFormChange = event => {
    console.log("inside handleForm");
    this.setState({
      formValue: event.target.value
    });
  };

  render() {
    const { formValue } = this.state;
    return (
      <div className="search-bar-container">
        <h1>Search Bar</h1>
        <form className="searchForm">
          <input
            onClick={this.checkInput}
            onInput={this.handleFormChange}
            type="text"
            value={formValue}
          />
        </form>
      </div>
    );
  }
}

export default Search;
