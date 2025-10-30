"use client";

import React from "react";
import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  // safely handle SSR or missing Redux
  let todos: any[] = [];
  try {
    const state = useSelector((state: any) => state?.todos);
    if (state && Array.isArray(state)) todos = state;
    else if (state?.todos && Array.isArray(state.todos)) todos = state.todos;
  } catch {
    todos = [];
  }

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
