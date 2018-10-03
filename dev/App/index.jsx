import { Component, render } from "inferno";
import { connect } from "inferno-redux";
import Search from "./components/Search.jsx";
import ResultsView from "./components/ResultsView.jsx";
import styles from "./sass/styles.scss";
import AppIcon from "./assets/app-store-icon.png";

class App extends Component {
  render() {
    const { client, helper, hits } = this.props;

    console.log("hits inside App ", hits);
    return (
      <div>
        <header>
          <img src={AppIcon} />
          <h1>App Store</h1>
          <h2>Find the apps you love.</h2>
          <h2>And the ones you’re about to.</h2>
        </header>
        <Search client={client} helper={helper} />

        {hits.length > 0 ? <ResultsView hits={hits} /> : ""}
      </div>
    );
  }
}

const mapDispatchToProps = ({ searchResults }) => {
  return {
    hits: searchResults.hits
  };
};

export default connect(
  mapDispatchToProps,
  null
)(App);
