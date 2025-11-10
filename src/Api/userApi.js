import axios from "axios";
import { apiUrl } from "./index";

const getAllUsers = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/users`);
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

const createUser = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, user);
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

const deleteUser = async (userId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/users/${userId}`);
    return data;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

const updateUser = async (user, id) => {
  try {
    const { data } = await axios.put(`${apiUrl}/users/${id}`, user);
    return data;
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

const getUserById = async (userId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/users/${userId}`);
    return data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
  }
};

const userApi = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
};

export default userApi;
