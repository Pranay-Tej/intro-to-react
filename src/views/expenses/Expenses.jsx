import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ExpenseDetail from "./ExpenseDetail";
import ExpenseList from "./ExpenseList";

function Expenses() {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <ExpenseList />
        </Route>
        <Route path={`${path}/:id`}>
          <ExpenseDetail />
        </Route>
      </Switch>
    </>
  );
}

export default Expenses;
