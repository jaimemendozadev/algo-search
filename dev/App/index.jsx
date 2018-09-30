import { Component } from "inferno";

class App extends Component {
  render() {
    const { message } = this.props;
    return <h1>{message ? message : "Hey There!"}</h1>;
  }
}

export default App;
