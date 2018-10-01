import { Component, render } from "inferno";

const defaultState = {
  formValue: "TYPE TO SEARCH"
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  handleFormChange = event => {
    console.log("inside handleForm");
    this.setState({
      formValue: event.target.value
    });
  };

  render() {
    const { formValue } = this.state;
    return (
      <div>
        <h1>Search Bar</h1>
        <form className="searchForm">
          <input
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
