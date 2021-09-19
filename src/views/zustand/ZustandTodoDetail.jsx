import React, { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import useTodoStore from "../../stores/todo/todo.store";

function ZustandTodoDetail() {
  const { selectedTodoId } = useTodoStore();

  useEffect(() => {
    if (selectedTodoId) {
      fetchById();
    }
  }, [selectedTodoId]);

  const {
    data: todo,
    isLoading,
    errorMessage,
    execute: fetchById,
  } = useAxios(`http://localhost:3001/todos/${selectedTodoId}`);

  return (
    <div>
      <h4>Selected Todo</h4>
      {isLoading && <p>Loading...</p>}

      {errorMessage && <p>{errorMessage}</p>}

      <p>{selectedTodoId}</p>
      {!isLoading && !errorMessage && todo && <p>{todo?.title}</p>}
    </div>
  );
}

export default ZustandTodoDetail;
