import { Component, render } from "inferno";
import { connect } from "inferno-redux";
import { CategoryTag } from "./CategoryTag.jsx";

class FacetList extends Component {
  handleCurrentFacet = facet => {
    const { helper } = this.props;

    // Use helper to search the index with clicked category.
    // Helper in App componentDidMount will be
    // listening to "result" event and process data accordingly.
    helper.toggleFacetRefinement("category", facet).search();
  };

  renderCategories = faceListArray => {
    return faceListArray.map(({ name, count, isRefined }, idx) => (
      <CategoryTag
        key={`${idx}-${name}-${count}`}
        name={name}
        count={count}
        isRefined={isRefined}
        callback={this.handleCurrentFacet}
      />
    ));
  };

  render() {
    const { facets } = this.props;
    if (facets.length == 0) {
      return null;
    }

    return (
      <div className="facetlist-container">
        {facets.length > 0 ? this.renderCategories(facets) : ""}
      </div>
    );
  }
}

const mapStateToProps = ({ facetResults }) => {
  return {
    facets: facetResults.facets
  };
};

export default connect(
  mapStateToProps,
  null
)(FacetList);
