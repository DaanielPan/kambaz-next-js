"use client";

import { ListGroup } from "react-bootstrap";

export type TodoType = {
  done: boolean;
  title: string;
  status: string;
};

const TodoItem = ({ todo }: { todo: TodoType }) => {
  return (
    <ListGroup.Item>
      <input type="checkbox" className="me-2" defaultChecked={todo.done} />
      {todo.title} ({todo.status})
    </ListGroup.Item>
  );
};

export default TodoItem;
