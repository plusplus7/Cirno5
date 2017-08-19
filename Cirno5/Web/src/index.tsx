import * as React from "react";
import * as ReactDOM from "react-dom";

import { HashRouter, Switch } from "react-router-dom";
import { AppRoute } from "./components/AppRoute";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <AppRoute />
    </Switch>
  </HashRouter>,
  document.getElementById("example")
);
