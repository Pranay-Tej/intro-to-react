import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import ZustandCounter from "./ZustandCounter";
import ZustandTodoList from "./ZustandTodoList";
import ZustandTodoDetail from "./ZustandTodoDetail";
import ZustandChain from "./ZustandChain";

function Zustand() {
  const { path } = useRouteMatch();
  return (
    <>
      <h2>Zustand</h2>
      <nav>
        <ul>
          <li>
            <Link to={`${path}/counter`}>Counter</Link>
          </li>
          <li>
            <Link to={`${path}/todo`}>Todo</Link>
          </li>
          <li>
            <Link to={`${path}/chain`}>Chaining Events</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path={`${path}/counter`}>
          <h4>Zustand Counter</h4>
          <ZustandCounter />
        </Route>

        <Route path={`${path}/todo`}>
          <h4>Zustand Todo</h4>
          <ZustandTodoList />
          <ZustandTodoDetail />
        </Route>
        <Route path={`${path}/chain`}>
          <h4>Zustand Chaining Events</h4>
          <ZustandChain />
        </Route>
      </Switch>
    </>
  );
}

export default Zustand;
