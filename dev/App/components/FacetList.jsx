import { Component, render } from "inferno";
import { connect } from "inferno-redux";
import { setCurrentFacetCategory } from "../services/redux/actions";

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

const mapStateToProps = ({ facetResults }) => {
  return {
    currentFacet: facetResults.currentFacet
  };
};

export default connect(
  mapStateToProps,
  { SetCurrentFacetCategory: setCurrentFacetCategory }
)(FacetList);
