import React from "react";
import "./App.css";
import Home from "./pages/Home";
import DetailUser from './components/DetailUser/DetailUser';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:id" component={DetailUser} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
