import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        margin: "20px 0",
        padding: "10px 20px",
        background: theme === "light" ? "blue" : "orange",
        color: theme === "light" ? "white" : "black",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}