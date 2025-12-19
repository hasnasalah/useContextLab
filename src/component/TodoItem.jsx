import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import {ThemeContext} from "../context/ThemeContext";

export default function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);
    const{theme}=useContext(ThemeContext);

  const handleEdit = () => {
    const newText = prompt("Edit todo:", todo.text);
    if (newText!== "") {
      editTodo(todo.id, newText);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <button onClick={handleEdit}>✏️</button>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}
