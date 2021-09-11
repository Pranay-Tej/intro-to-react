import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../context/TodoContext";
import useAxios from "../../hooks/useAxios";

function ContextTodoDetail() {
  const { state, dispatch } = useContext(TodoContext);

  useEffect(() => {
    if (state?.selectedTodoId) {
      fetchById();
    }
  }, [state?.selectedTodoId]);

  const {
    data: todo,
    isLoading,
    errorMessage,
    execute: fetchById,
  } = useAxios(`http://localhost:3001/todos/${state.selectedTodoId}`);

  return (
    <div>
      <h4>Selected Todo</h4>
      {isLoading && <p>Loading...</p>}

      {errorMessage && <p>{errorMessage}</p>}

      <p>{state.selectedTodoId}</p>
      {!isLoading && !errorMessage && todo && <p>{todo?.title}</p>}
    </div>
  );
}

export default ContextTodoDetail;
