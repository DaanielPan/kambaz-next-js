"use client";

import React, { useEffect, useState } from "react";
import * as client from "./client";
import {
  FaPlus,
  FaPlusCircle,
  FaTrash,
  FaTimes,
  FaPencilAlt,
} from "react-icons/fa";
import { ListGroup, FormControl } from "react-bootstrap";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);

  // Load todos
  const fetchTodos = async () => {
    const serverTodos = await client.fetchTodos();
    setTodos(serverTodos);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  // Add "New Posted Todo"
  const addTodo = async () => {
    const todo = { title: "New Posted Todo", completed: false };
    const newTodo = await client.postNewTodo(todo);
    setTodos([...todos, newTodo]);
  };

  // Old GET create
  const createNewTodo = async () => {
    const newList = await client.createNewTodo();
    setTodos(newList);
  };

  // GET delete
  const removeTodo = async (todo: any) => {
    const updated = await client.removeTodo(todo);
    setTodos(updated);
  };

  // DELETE delete
  const deleteTodo = async (todo: any) => {
    await client.deleteTodo(todo);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  // Toggle completion (old GET implementation)
  const toggleCompleted = async (todo: any) => {
    const updated = await client.updateCompleted({
      ...todo,
      completed: !todo.completed,
    });
    setTodos(updated);
  };

  // PUT update todo (title, completed, editing false)
  const updateTodo = async (todo: any) => {
    await client.updateTodo(todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  // Turn editing on
  const editTodo = (todo: any) => {
    const updated = todos.map((t) =>
      t.id === todo.id ? { ...todo, editing: true } : t
    );
    setTodos(updated);
  };

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>

      <h4>
        Todos{" "}
        <FaPlusCircle
          onClick={addTodo}
          className="text-success float-end fs-3"
        />
        <FaPlus
          onClick={createNewTodo}
          className="text-primary float-end fs-3 me-3"
        />
      </h4>

      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            className="d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center">
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={todo.completed}
                className="form-check-input me-2"
                onChange={(e) =>
                  updateTodo({
                    ...todo,
                    completed: e.target.checked,
                  })
                }
              />

              {/* Title / Input Field */}
              {!todo.editing ? (
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                  className="me-3"
                >
                  {todo.title}
                </span>
              ) : (
                <FormControl
                  className="w-50 float-start"
                  defaultValue={todo.title}
                  onKeyDown={(e: any) => {
                    if (e.key === "Enter") {
                      updateTodo({ ...todo, title: e.target.value, editing: false });
                    }
                  }}
                  onChange={(e) =>
                    updateTodo({ ...todo, title: e.target.value })
                  }
                />
              )}
            </div>

            {/* Action icons */}
            <div>
              {/* Pencil icon */}
              <FaPencilAlt
                onClick={() => editTodo(todo)}
                className="text-primary me-3 mt-1"
              />

              {/* GET delete */}
              <FaTrash
                onClick={() => removeTodo(todo)}
                className="text-danger me-3"
              />

              {/* DELETE delete */}
              <FaTimes
                onClick={() => deleteTodo(todo)}
                className="text-danger fs-3"
              />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <hr />
    </div>
  );
}
