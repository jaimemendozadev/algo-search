import { Component, render } from "inferno";
import Search from "./components/Search.jsx";
import ResultsView from "./components/ResultsView.jsx";
import styles from "./sass/styles.scss";
import AppIcon from "./assets/app-store-icon.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: []
    };
  }

  setSearchResults = hits => {
    this.setState({
      hits
    });
  };

  render() {
    const { client, index } = this.props;
    const { hits } = this.state;
    return (
      <div>
        <header>
          <img src={AppIcon} />
          <h1>App Store</h1>
          <h2>Find the apps you love.</h2>
          <h2>And the ones you’re about to.</h2>
        </header>
        <Search
          client={client}
          index={index}
          callback={this.setSearchResults}
        />

        {hits.length > 0 ? <ResultsView hits={hits} /> : ""}
      </div>
    );
  }
}

export default App;
