"use client";

import React, { useEffect, useState } from "react";
import * as client from "./client";
import { FaPlus, FaPlusCircle, FaTrash, FaTimes } from "react-icons/fa";
import { ListGroup, FormControl } from "react-bootstrap";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);

  // Fetch todos from server
  const fetchTodos = async () => {
    const serverTodos = await client.fetchTodos();
    setTodos(serverTodos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // POST new todo (JSON request)
  const addTodo = async () => {
    const todo = {
      title: "New Posted Todo",
      completed: false,
    };
    const newTodo = await client.postNewTodo(todo);
    setTodos([...todos, newTodo]); // correct — server returns only newTodo
  };

  // OLD GET create new todo
  const createNewTodo = async () => {
    const newList = await client.createNewTodo();
    setTodos(newList);
  };

  // REMOVE using GET (old)
  const removeTodo = async (todo: any) => {
    const updated = await client.removeTodo(todo);
    setTodos(updated);
  };

  // DELETE using DELETE HTTP verb (new)
  const deleteTodo = async (todo: any) => {
    await client.deleteTodo(todo);
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };

  // Toggle completion using old GET route
  const toggleCompleted = async (todo: any) => {
    const updated = await client.updateCompleted({
      ...todo,
      completed: !todo.completed,
    });
    setTodos(updated);
  };

  // Update todo via PUT
  const updateTodo = async (todo: any) => {
    await client.updateTodo(todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>

      {/* Buttons */}
      <h4>
        Todos{" "}
        <FaPlusCircle
          className="text-success float-end fs-3"
          onClick={addTodo}
          id="wd-add-posted-todo"
        />
        <FaPlus
          className="text-primary float-end fs-3 me-3"
          onClick={createNewTodo}
          id="wd-add-default-todo"
        />
      </h4>

      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            className="d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                className="form-check-input me-2"
                onChange={() => toggleCompleted(todo)}
              />

              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                className="me-3"
              >
                {todo.title}
              </span>
            </div>

            <div>
              <FaTrash
                onClick={() => removeTodo(todo)}
                className="text-danger me-3"
                id="wd-remove-todo"
              />

              <FaTimes
                onClick={() => deleteTodo(todo)}
                className="text-danger fs-3"
                id="wd-delete-todo"
              />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <hr />
    </div>
  );
}
