import { TodoContext } from "../context/TodoContext";
import { useState,useEffect } from "react";

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
});
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (todoId) => {
    const toggled = todos.map(todo =>
      todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo
    );
    setTodos(toggled);
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const editTodo = (todoId, newText) => {
    const updated = todos.map(todo =>
      todo.id === todoId
        ? { ...todo, text: newText }
        : todo
    );
    setTodos(updated);
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
