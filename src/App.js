import React from "react";
import Todos from "./screens/Todos";
import Calculator from "./screens/Calculator";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Todos />
          </Route>
          <Route path="/Calculator">
            <Calculator />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
