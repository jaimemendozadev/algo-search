import * as inferno from "inferno";
import App from "./App/index.jsx";

inferno.render(
  <App message={"Hello World!"} />,
  document.querySelector(".container")
);
