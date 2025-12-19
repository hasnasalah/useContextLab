import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { FilterContext } from "../context/FilterContext";
import {ThemeContext} from "../context/ThemeContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos,clearCompleted } = useContext(TodoContext);
  const { filter } = useContext(FilterContext);
 const {theme}=useContext(ThemeContext);
  const filteredTodos = todos.filter(todo => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div>
      {filteredTodos.length === 0 ? (
        <p>No todos yet! Add one above.</p>
      ) : (
        filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
      <button onClick={()=>{clearCompleted()}}> Clear all</button>
      <p>{todos.length} Items Left</p>
    </div>
  );
}
