import TodoItem from "./TodoItemTemp";
import todos from "./todos.json";
import { ListGroup } from "react-bootstrap";

const TodoList = () => {
  return (
    <div id="wd-todo-list">
      <h3>Todo List</h3>
      <ListGroup>
        {todos.map((todo) => (
          // Here, we pass the 'todo' object as a prop
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
};
export default TodoList;