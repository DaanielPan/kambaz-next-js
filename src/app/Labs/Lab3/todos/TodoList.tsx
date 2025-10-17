import TodoItem from "./TodoItemTemp";
import todos from "./todos.json"; // Import the data
import { ListGroup } from "react-bootstrap";

const TodoList = () => {
  return (
    <div id="wd-todo-list">
      <h3>Todo List</h3>
      <ListGroup>
        {todos.map((todo) => (
          // Use the todo's title as the unique key for this lab
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
};
export default TodoList;