import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const TODOS_API = `${HTTP_SERVER}/lab5/todos`;

// GET /lab5/welcome
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
  return response.data;
};

// GET all todos
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};

// POST (JSON) create new todo
export const postNewTodo = async (todo: any) => {
  const response = await axios.post(`${TODOS_API}/create`, todo);
  return response.data;
};

// OLD GET create (for earlier labs)
export const createNewTodo = async () => {
  const response = await axios.get(`${TODOS_API}/create`);
  return response.data;
};

// GET remove (old version)
export const removeTodo = async (todo: any) => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};

// DELETE remove (new proper version)
export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};

// PUT update todo with JSON body
export const updateTodo = async (todo: any) => {
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};

// Update completed (old GET version)
export const updateCompleted = async (todo: any) => {
  const response = await axios.get(
    `${TODOS_API}/${todo.id}/completed/${todo.completed}`
  );
  return response.data;
};

// Update title (old GET)
export const updateTitle = async (id: number, title: string) => {
  const response = await axios.get(`${TODOS_API}/${id}/title/${title}`);
  return response.data;
};

// Update description (old GET)
export const updateDescription = async (id: number, description: string) => {
  const response = await axios.get(
    `${TODOS_API}/${id}/description/${description}`
  );
  return response.data;
};
