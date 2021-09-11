import React, { useEffect } from "react";
import useAxios from "../hooks/useAxios";

function TodoListCustomHook() {
  useEffect(() => fetchAll(), []);

  const {
    data: todoList,
    isLoading,
    errorMessage,
    execute: fetchAll,
  } = useAxios(`http://localhost:3001/todos`);

  return (
    <div>
      <h3>TodoList Custom Hook</h3>
      {isLoading && <p>Loading...</p>}

      {errorMessage && <p>{errorMessage}</p>}

      {!isLoading && !errorMessage && todoList && (
        <ul>
          {todoList.map((todoItem) => (
            <li key={todoItem.id}>{todoItem.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoListCustomHook;
