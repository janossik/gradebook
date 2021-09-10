import { worker } from "mocks/browser";
import AppProvider from "providers/AppProvider";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./view/Root";

const root = document.getElementById("root");

worker.start().then(() => {
  ReactDOM.render(
    <StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </StrictMode>,
    root
  );
});
