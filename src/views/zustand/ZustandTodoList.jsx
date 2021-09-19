import React, { useEffect } from "react";
import useTodoStore from "../../stores/todo/todo.store";

function ZustandTodoList() {
  const { todoList, isLoading, errorMessage, fetchAll, setSelectedTodoId } =
    useTodoStore();

  useEffect(() => fetchAll(), []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {errorMessage && <p>{errorMessage}</p>}

      {!isLoading && !errorMessage && todoList && (
        <ul>
          {todoList.map((todoItem) => (
            <li key={todoItem.id}>
              {todoItem.title}
              <button onClick={() => setSelectedTodoId(todoItem.id)}>👀</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ZustandTodoList;
