import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import TodoList from "./views/TodoList";
// import Forms from "./views/Forms";
// import Home from "./views/Home";
// import Counters from "./views/Counters";
// import Expenses from "./views/expenses/Expenses";
// import NotFound from "./views/NotFound";

const TodoList = lazy(() => import("./views/TodoList"));
const Forms = lazy(() => import("./views/Forms"));
const Home = lazy(() => import("./views/Home"));
const Counters = lazy(() => import("./views/Counters"));
const Expenses = lazy(() => import("./views/expenses/Expenses"));
const NotFound = lazy(() => import("./views/NotFound"));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/counters">
                <Counters />
              </Route>
              <Route path="/forms">
                <Forms />
              </Route>
              <Route path="/todos">
                <TodoList />
              </Route>
              <Route path="/expenses">
                <Expenses />
              </Route>
              <Route path="/**">
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
