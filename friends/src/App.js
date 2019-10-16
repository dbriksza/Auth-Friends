import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Navigation from "./components/Navigation";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Friends from "./components/Friends";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={Friends} />
      </Switch>
    </div>
  );
}

export default App;
