import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

function ExpenseDetail() {
  const [errorMessage, setErrorMessage] = useState(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log(`fetching expense ${id} details from API`);
  }, [id]);

  const save = () => {
    let success = false;
    if (success) {
      // Programmatic Navigation
      history.push("/expenses");
    } else {
      setErrorMessage("There was some error");
    }
  };
  return (
    <div>
      <Link to="/expenses">Back</Link>

      <p>{id}</p>

      {errorMessage && <p>{errorMessage}</p>}

      <button onClick={save}>Save</button>
    </div>
  );
}

export default ExpenseDetail;
