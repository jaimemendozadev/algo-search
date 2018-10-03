import { Component, render } from "inferno";

class FacetList extends Component {
  renderCategories = faceListArray => {
    return faceListArray.map(({ name, count }, idx) => (
      <div className="category-tag" key={`${idx}-${name}-${count}`}>
        {name}: {count}
      </div>
    ));
  };

  componentDidMount = () => {
    const { facets } = this.props;
  };

  render() {
    const { facets } = this.props;
    console.log("this.props inside FacetList ", this.props);
    return (
      <div className="facelist-container">
        <h1>FacetList</h1>
        {facets.length > 0 ? this.renderCategories(facets) : ""}
      </div>
    );
  }
}

export default FacetList;
