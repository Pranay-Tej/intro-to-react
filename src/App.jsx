import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import Counters from "./views/Counters";

// const Home = lazy(() => import("./views/Home"));

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/counters">Counters</Link>
              </li>
              <li>
                <Link to="/forms">Forms</Link>
              </li>
              <li>
                <Link to="/todos">TodoList</Link>
              </li>
              <li>
                <Link to="/expenses">Expenses</Link>
              </li>
            </ul>
          </nav>

          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/counters">
              <Counters />
            </Route>
            <Route path="/forms">
              <Home />
            </Route>
            <Route path="/todos">
              <Home />
            </Route>
            <Route path="/expenses">
              <Home />
            </Route>
            <Route path="/**">
              <Home />
            </Route>
          </Switch>
          {/* </Suspense> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
