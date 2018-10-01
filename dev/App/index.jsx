import { Component, render } from "inferno";
import Search from "./components/Search.jsx";
import styles from "./sass/styles.scss";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>App Store</h1>
          <h2>Find the apps you love.</h2>
          <h2>And the ones you’re about to.</h2>
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
