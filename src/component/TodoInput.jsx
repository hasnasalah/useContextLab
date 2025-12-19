import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import ThemeContext from "../context/ThemeContext";

export default function TodoInput() {
  const [text, setText] = useState(""); 
  const { addTodo } = useContext(TodoContext); 
  const{theme}=useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    addTodo(text); 
    setText(""); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        style={{ padding: "10px", width: "250px", marginRight: "10px" ,background:theme==="light"?"gray":"white"}}
      />
      <button type="submit" 
       style={{
        margin: "20px 0",
        padding: "10px 20px",
        background: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}>
        Add Todo
      </button>
    </form>
  );
}
