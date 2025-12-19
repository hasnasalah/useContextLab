import TodoList from './component/TodoList';
import TodoInput from './component/TodoInput';
import ThemeButton from './component/ThemeButton';
import FilterButtons from './component/FilterButtons';
import {ThemeContext} from "./context/ThemeContext";
import { useContext } from 'react';
import './App.css'

function App() {
const {theme}=useContext(ThemeContext);
  return (
    <>
    <div style={{background:theme==="light"?"black":"white"}}>
      <div> <h1> Todo App (ContextA API)</h1>
      <ThemeButton/>
      </div>
     
      <TodoInput/>
      <FilterButtons/>
      <TodoList/>
      </div>
    </>
  )
}

export default App
