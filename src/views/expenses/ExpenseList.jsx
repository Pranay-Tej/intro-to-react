import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function ExpenseList() {
  const { url } = useRouteMatch();

  return (
    <div>
      <Link to={`${url}/1`}>One</Link>
      <br />
      <Link to={`${url}/2`}>Two</Link>
    </div>
  );
}

export default ExpenseList;
