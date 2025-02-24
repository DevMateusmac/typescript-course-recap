import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: "Created the todo.", createTodo: newTodo });
};


export const getTodos: RequestHandler = (req, res, next) => {
  res.json({todos: TODOS})
};


export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as {text: string}).text;

  const todoindex = TODOS.findIndex(todo => todo.id === todoId);

  if(todoindex < 0) {
    throw new Error('Could not find todo!');
  }

  TODOS[todoindex] = new Todo(TODOS[todoindex].id, updatedText);

  res.json({message: 'Updated!', updateTodo: TODOS[todoindex]});
};

export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) => {
  const todoId = req.params.id;

  const todoindex = TODOS.findIndex(todo => todo.id === todoId);

  if(todoindex < 0) {
    throw new Error('Could not find todo!');
  }

  TODOS.splice(todoindex, 1);
  res.json({message: 'Todo deleted successfully!'})
}