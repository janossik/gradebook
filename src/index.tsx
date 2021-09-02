import { worker } from "mocks/browser";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./view/Root";

const root = document.getElementById("root");

worker.start().then(() => {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    root
  );
});
