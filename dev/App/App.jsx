import { Component, render } from "inferno";
import { connect } from "inferno-redux";
import Search from "./components/Search.jsx";
import SortBy from "./components/SortBy.jsx";
import ResultsView from "./components/ResultsView.jsx";
import FacetList from "./components/FacetList.jsx";
import Header from "./components/Header.jsx";
import { setHitsCategoriesAppStatus } from "./services/redux/actions.js";
import styles from "./sass/styles.scss";

class App extends Component {
  componentDidMount = () => {
    const { helper, SetHitsCategoriesAppStatus } = this.props;

    helper.on("result", content => {
      const facetValues = content.getFacetValues("category");

      console.log("facetValues in App CDM ", facetValues);
      console.log("content in App CDM is ", content);
      console.log("\n");
      console.log("\n");

      // on App componentDidMount, we setup helper to listen for "results"
      // on "results" event, we'll get new hits and facet category values
      // will also turn app status to hasStarted

      SetHitsCategoriesAppStatus(content.hits, facetValues);
    });

    this.setState({ helper });
  };

  render() {
    const { client, helper } = this.props;
    return (
      <div className="app-container">
        <div className="header-search-sort-container">
          <Header />

          <div className="search-sort-container">
            <Search client={client} helper={helper} />
            <SortBy helper={helper} />
          </div>
        </div>

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
    SetHitsCategoriesAppStatus: setHitsCategoriesAppStatus
  }
)(App);
