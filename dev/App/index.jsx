import { Component, render } from "inferno";
import styles from "./sass/styles.scss";

class App extends Component {
  render() {
    return (
      <div>
        <h1>App Store</h1>
        <h2>Find the apps you love.</h2>
        <h2>And the ones you’re about to.</h2>
      </div>
    );
  }
}

export default App;
