import { TodoContext } from "../context/TodoContext";
import {useState} from "react";



export function TodoProvider(children) {
const [todos,setTodos]=useState([]);

const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    text,
    completed: false
  };
  setTodos([...todos, newTodo]);
};
const toggleTodo=(todoId)=>{
  const toggeled=todos.mop(todo=>todo.id===todoId ?{...todo,completed:!todo.completed}:todo);
  setTodos(toggeled);
};

const deleteTodo = (todoId) => {
    const deleted=todos.filter(todo=>todo.id!==todoId);
  setTodos(deleted);
};
const editTodo=(todoId,newText,)=>{
    const newTodo=todos.map(todo=> 
        todo.id=todoId ? {...todo,text:newText}:todo);
        setTodos(newTodo);
}
const ClearCompleted=(todoId)=>{
  const cleared=todos.filter(todo=>todo.id!==todoId);
  setTodos(cleared);
}

return (
  <TodoContext.Provider value={{
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    ClearCompleted
  }}>
    {children}
  </TodoContext.Provider>
);






}