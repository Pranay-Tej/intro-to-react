import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Zustand from "./views/zustand/Zustand";

const TodoList = lazy(() => import("./views/TodoList"));
const Forms = lazy(() => import("./views/Forms"));
const Home = lazy(() => import("./views/Home"));
const Counters = lazy(() => import("./views/Counters"));
const Expenses = lazy(() => import("./views/expenses/Expenses"));
const Context = lazy(() => import("./views/context/Context"));
const TodoListCustomHook = lazy(() => import("./views/TodoListCustomHook"));
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
              <li>
                <Link to="/custom-hook">TodoList Custom Hook</Link>
              </li>
              <li>
                <Link to="/context">Context</Link>
              </li>
              <li>
                <Link to="/zustand">Zustand</Link>
              </li>
            </ul>
          </nav>
          <hr />
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
              <Route path="/custom-hook">
                <TodoListCustomHook />
              </Route>
              <Route path="/context">
                <Context />
              </Route>
              <Route path="/zustand">
                <Zustand />
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
