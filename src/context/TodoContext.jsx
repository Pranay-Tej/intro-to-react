import React, { createContext, useReducer } from "react";

export const TodoActions = {
  setSelectedTodoId: "setSelectedTodoId",
};

const initialState = { selectedTodoId: null };

function reducer(state, action) {
  switch (action.type) {
    case TodoActions.setSelectedTodoId:
      return { selectedTodoId: action.payload };
    default:
      throw new Error();
  }
}

export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
