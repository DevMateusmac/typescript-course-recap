import './NewTodo.css'

import { FC, FormEvent, useRef } from "react";


type NewTodoProps = {
  addNewTodo: (text: string) => void;
}

const NewTodo: FC<NewTodoProps> = ({addNewTodo}) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (ev: FormEvent) => {
    ev.preventDefault();

    const enteredText = textInputRef.current!.value
    addNewTodo(enteredText)
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef}/>
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  )
};

export default NewTodo;
