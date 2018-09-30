import { render } from 'inferno';
import App from './App/index.jsx';

const message = "Hello world";

render(
  <App message={ "Hello World!" } />,
  document.querySelector(".container")
);