import React, { useContext, useEffect } from "react";
import { TodoActions, TodoContext } from "../../context/TodoContext";
import useAxios from "../../hooks/useAxios";

function ContextTodoList() {
  const { state, dispatch } = useContext(TodoContext);

  useEffect(() => fetchAll(), []);

  const {
    data: todoList,
    isLoading,
    errorMessage,
    execute: fetchAll,
  } = useAxios(`http://localhost:3001/todos`);

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {errorMessage && <p>{errorMessage}</p>}

      {!isLoading && !errorMessage && todoList && (
        <ul>
          {todoList.map((todoItem) => (
            <li key={todoItem.id}>
              {todoItem.title}
              <button
                onClick={() =>
                  dispatch({
                    type: TodoActions.setSelectedTodoId,
                    payload: todoItem.id,
                  })
                }
              >
                👀
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContextTodoList;
