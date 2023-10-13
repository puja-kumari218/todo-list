import axios from "axios";
import { baseUrl } from "../config";
import toast from "react-hot-toast";

const todos = {
  getTodos: async () => {
    let response = null;
    try {
      response = axios.get(`${baseUrl}/api/todos`).then((response) => response);
    } catch (error) {
      toast.error("Error getting todos");
    }
    return response;
  },
  addTodo: async (todo) => {
    let response = null;
    try {
      response = axios
        .post(`${baseUrl}/api/todos`, todo)
        .then((response) => response);
    } catch (error) {
      toast.error("Error adding todo");
    }
    return response;
  },
  updateTodo: async (todo) => {
    let response = null;
    try {
      response = axios
        .put(`${baseUrl}/api/todos/${todo.id}`, todo)
        .then((response) => response);
    } catch (error) {
      toast.error("Error updating todo");
    }
    return response;
  },
  deleteTodo: async (todoId) => {
    let response = null;
    try {
      response = axios
        .delete(`${baseUrl}/api/todos/${todoId}`)
        .then((response) => response);
    } catch (error) {
      toast.error("Error deleting todo");
    }
    return response;
  },
};

export default todos;
