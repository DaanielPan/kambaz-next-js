import { ListGroup } from "react-bootstrap";

// Define the structure of a single todo object
type TodoType = {
  done: boolean;
  title: string;
  status: string;
};

// This component now receives one 'todo' object as a prop
const TodoItem = ({ todo }: { todo: TodoType }) => {
  return (
    <ListGroup.Item>
      <input type="checkbox" className="me-2" defaultChecked={todo.done} />
      {todo.title} ({todo.status})
    </ListGroup.Item>
  );
};
export default TodoItem;