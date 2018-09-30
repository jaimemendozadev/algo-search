import * as inferno from "inferno";
import { initDevTools } from "inferno-devtools";
import App from "./App/index.jsx";

initDevTools();

inferno.render(<App />, document.querySelector(".container"));
