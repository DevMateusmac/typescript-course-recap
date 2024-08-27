import './TodoList.css'

import { FC } from "react";

export type TodoComponent = {
  id: string;
  text: string;
};

type Todos = { 
  todos: TodoComponent[];
  todoDeleteHandler: (todoId: string) => void;
};

const TodoList: FC<Todos> = ({ todos, todoDeleteHandler }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => todoDeleteHandler(todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
