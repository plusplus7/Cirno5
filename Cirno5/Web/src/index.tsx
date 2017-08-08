import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { AppRoute } from "./components/AppRoute";

ReactDOM.render(
  <Router>
    <AppRoute />
  </Router>,
  document.getElementById("example")
);
