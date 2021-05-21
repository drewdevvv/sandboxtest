import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
function Hello() {
  return (
    <div>
      <h1>Hi I'm Drew</h1>
    </div>
  );
}
ReactDOM.render(<Hello />, document.getElementById("root"));
