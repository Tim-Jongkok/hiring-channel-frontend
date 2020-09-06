import React from "react";
import "./App.css";
import Home from "./pages/Home";
import DetailUser from './components/DetailUser/DetailUser';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./pages/Auth";

import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:id" component={DetailUser} />
          <PublicRoute exact redirectPath="/" path="/auth" component={Auth} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
