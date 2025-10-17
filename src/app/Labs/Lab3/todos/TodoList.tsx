"use client";

import { ListGroup } from "react-bootstrap";
import TodoItem, { TodoType } from "./TodoItem";
import todos from "./todos.json";

const TodoList = () => {
  return (
    <div id="wd-todo-list">
      <h3>Todo List</h3>
      <ListGroup>
        {todos.map((todo: TodoType) => (
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
};

export default TodoList;
