import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./pages/Auth";

import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" redirectPath="/auth" component={Home} />
          <PublicRoute exact redirectPath="/" path="/auth" component={Auth} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
