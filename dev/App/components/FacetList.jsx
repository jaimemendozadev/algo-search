import { Component, render } from "inferno";

class FacetList extends Component {
  render() {
    console.log("this.props inside FacetList ", this.props);
    return (
      <div className="facelist-container">
        <h1>FacetList</h1>
      </div>
    );
  }
}

export default FacetList;
