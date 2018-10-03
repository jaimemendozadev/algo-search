import { Component, render } from "inferno";

class FacetList extends Component {
  render() {
    console.log("this.props inside FacetList ", this.props);
    return <h1>FacetList</h1>;
  }
}

export default FacetList;
