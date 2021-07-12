import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./view/Root";

const root = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);
