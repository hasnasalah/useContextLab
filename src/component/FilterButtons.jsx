import { useContext } from "react";
import FilterContext from "../context/FilterContext";
import ThemeContext from "../context/ThemeContext";

export default function FilterButtons() {
  const { filter, setFilter } = useContext(FilterContext);
    const{theme}=useContext(ThemeContext);

  return (
    <>
  <button onClick={() => setFilter("all")}
     style={{
        margin: "20px 0",
        padding: "10px 20px",
        background: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}>All</button>
<button onClick={() => setFilter("active")} 
      style={{
        margin: "20px 0",
        padding: "10px 20px",
        background: theme === "light" ? "black" : "white",
        color: theme === "light" ? "white" : "black",
        border: "none",
        borderRadius: "5px",
      }}>Active</button>
<button onClick={() => setFilter("completed")}  
        style={{
        margin: "20px 0",
        padding: "10px 20px",
        background: theme === "light" ? "black" : "white",
        color: theme === "light" ? "white" : "black",
        border: "none",
        borderRadius: "5px",
      }}>Completed</button>
</>
  );
}