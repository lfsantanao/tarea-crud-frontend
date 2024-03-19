import axios from "axios";
const URL='https://tareas-crud-xco7.onrender.com'
// const URL ="http://localhost:8000";

const tasksApi = axios.create({
  baseURL: `https://tareas-crud-xco7.onrender.com/tasks/api/v1/tasks`,
});

export const getAllTasks = () => tasksApi.get("/");

export const getTask = (id) => tasksApi.get(`/${id}`);

export const createTask = (task) => tasksApi.post("/", task);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);

export const deleteTask = (id) => tasksApi.delete(`/${id}`);
