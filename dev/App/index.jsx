import { Component, render } from "inferno";
import { connect } from "inferno-redux";
import Search from "./components/Search.jsx";
import ResultsView from "./components/ResultsView.jsx";
import FacetList from "./components/FacetList.jsx";
import Header from "./components/Header.jsx";
import { setHitsAndCategories } from "./services/redux/actions.js";
import styles from "./sass/styles.scss";

class App extends Component {
  componentDidMount = () => {
    const { helper, SetHitsAndCategories } = this.props;

    helper.on("result", content => {
      const facetValues = content.getFacetValues("category");

      console.log("facetValues in App CDM ", facetValues);
      console.log("content in App CDM is ", content);
      console.log("\n");
      console.log("\n");

      // on App componentDidMount, we setup helper to listen for "results"
      // on "results" event, we'll get new hits and facet category values

      SetHitsAndCategories(content.hits, facetValues);
    });

    this.setState({ helper });
  };

  render() {
    const { client, helper, hits } = this.props;

    // console.log("hits inside App ", hits);
    return (
      <div>
        <Header />

        <Search client={client} helper={helper} />

        <div className="results-facetlist-container">
          <FacetList helper={helper} />
          <ResultsView />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    SetHitsAndCategories: setHitsAndCategories
  }
)(App);
