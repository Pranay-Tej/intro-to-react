import axios from "axios";
import React, { useEffect, useState } from "react";
// import useAxios from "../hooks/useAxios";

function TodoListCustomHook() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // const {
  //   data: todoList,
  //   isLoading,
  //   errorMessage,
  // } = useAxios(`http://localhost:3001/todos`);

  // onCreate
  useEffect(() => fetchAll(), []);

  // fetchAll
  const fetchAll = () => {
    setIsLoading(true);

    axios
      .get(`http://localhost:3001/todos`)
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
