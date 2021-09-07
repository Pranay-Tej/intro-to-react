import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./TodoList.module.css";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({ id: "", title: "" });

  // onCreate
  useEffect(() => fetchAll(), []);

  // reset
  const resetTodoForm = () => {
    setTodo({
      id: "",
      title: "",
    });
  };

  // fetchAll
  const fetchAll = () => {
    // fetch(`http://localhost:3001/todos`)
    //   .then((res) => res.json())
    //   .then((data) => (todoList = data))
    //   .catch((error) => console.error(error));

    axios
      .get(`http://localhost:3001/todos`)
      .then((res) => setTodoList(res.data))
      .catch((error) => console.error(error));
  };

  // fetchById
  const fetchById = (id) => {
    console.log("edit", id);
    // TODO
  };

  // delete
  const deleteById = (id) => {
    console.log("deleting", id);
    // TODO
  };

  // saveForm
  const saveTodo = () => {
    if (todo?.id) {
      updateTodo();
    } else {
      createTodo();
    }
  };

  // create
  const createTodo = () => {
    console.log("saving");
    axios
      .post(`http://localhost:3001/todos`, {
        title: todo.title,
      })
      .then((response) => {
        console.log(response.data);
        resetTodoForm();
        fetchAll();
      })
      .catch((e) => console.error(e));
  };

  // update
  const updateTodo = () => {
    console.log("updating", todo.id);
    // TODO
  };

  return (
    <div>
      <h3>TodoList</h3>
      <ul>
        {todoList.map((todoItem) => (
          <li
            key={todoItem.id}
            // className={ TODO }
          >
            {todoItem.title}
            <button onClick={() => fetchById(todoItem.id)}>✒️</button>
            <button onClick={() => deleteById(todoItem.id)}>❌</button>
          </li>
        ))}
      </ul>
      {/* TodoForm */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todo?.title) {
            saveTodo();
          }
        }}
      >
        <label htmlFor="title">Todo</label>
        <input
          type="text"
          name="title"
          id="title"
          value={todo.title}
          onChange={(e) =>
            setTodo((prevTodo) => {
              return { ...prevTodo, title: e.target.value };
            })
          }
        />
        <button type="submit">{todo?.id ? "Update" : "Create"}</button>
        {todo?.id && (
          <button type="button" onClick={resetTodoForm}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default TodoList;
