import React, { createContext } from "react";

export const TodoContext = createContext({
  todos: [],              
  addTodo: () => {},      
  toggleTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  clearCompleted: () => {},
});