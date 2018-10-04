import { Component, render } from "inferno";
import { connect } from "inferno-redux";
import { getCurrentFacetResults } from "../services/redux/actions";
import { CategoryTag } from "./CategoryTag.jsx";

class FacetList extends Component {
  handleCurrentFacet = facet => {
    console.log("inside handleCurrentFacet");
    const { helper } = this.state;

    // Make Facet API call
    helper.toggleFacetRefinement("category", facet).search();
  };

  renderCategories = faceListArray => {
    const { currentFacet } = this.props;

    const facetNameKey = Object.keys(currentFacet)[0];

    return faceListArray.map(({ name, count }, idx) => (
      <CategoryTag
        facetNameKey={facetNameKey}
        currentFacet={currentFacet}
        callback={this.handleCurrentFacet}
        name={name}
        count={count}
        key={`${idx}-${name}-${count}`}
      />
    ));
  };

  componentDidMount = () => {
    const { GetCurrentFacetResults, helper } = this.props;

    helper.on("result", content => {
      console.log("content inside FacetList is ", content);

      const facet = content.facets[0]["data"];

      console.log("facet inside CDM ", facet);

      // Fire Redux Action
      GetCurrentFacetResults(facet, content.hits);
    });

    this.setState({
      helper
    });
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
  { GetCurrentFacetResults: getCurrentFacetResults }
)(FacetList);
