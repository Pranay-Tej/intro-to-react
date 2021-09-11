import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import TodoProvider from "../../context/TodoContext";
import ThemeProvider from "../../context/ThemeContext";
import ContextTodoList from "./ContextTodoList";
import ContextTodoDetail from "./ContextTodoDetail";
import ContextThemeSelection from "./ContextThemeSelection";
import ContextThemeView from "./ContextThemeView";

function Context() {
  const { path } = useRouteMatch();
  return (
    <>
      <h2>Context</h2>
      <nav>
        <ul>
          <li>
            <Link to={`${path}/theme`}>Theme</Link>
          </li>
          <li>
            <Link to={`${path}/todo`}>Todo</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path={`${path}/theme`}>
          <ThemeProvider>
            <h4>Context Theme</h4>
            <ContextThemeSelection />
            <ContextThemeView />
          </ThemeProvider>
        </Route>

        <Route path={`${path}/todo`}>
          <TodoProvider>
            <h4>Context Todo</h4>
            <ContextTodoList />
            <ContextTodoDetail />
          </TodoProvider>
        </Route>
      </Switch>
    </>
  );
}

export default Context;
