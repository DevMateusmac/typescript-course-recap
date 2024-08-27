import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList, { TodoComponent }  from "./components/TodoList";


function App() {
  const [todos, setTodos] = useState<TodoComponent[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text}]
    )
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }

  return (
    <>
      <NewTodo addNewTodo={todoAddHandler}/>
      <TodoList todoDeleteHandler={todoDeleteHandler} todos={todos}/>
    </>
  );
}

export default App;
