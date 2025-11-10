import { createContext, useContext, useEffect, useReducer } from "react";
import api from "../Api";

// 1️⃣ Create Context
const UserContext = createContext();

// 2️⃣ Reducer Function
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_USERS":
      return payload;

    case "CREATE_USER":
      return [...state, payload];

    case "DELETE_USER":
      return state.filter((user) => user.id !== payload);

    case "UPDATE_USER":
      return state.map((user) => (user.id === payload.id ? payload : user));

    default:
      return state;
  }
};

// 3️⃣ Provider Component
const UserProvider = ({ children }) => {
  const [users, dispatch] = useReducer(reducer, []);

  // ✅ Fetch All Users
  const fetchAllUsers = async () => {
    const data = await api.userApi.getAllUsers();
    if (data) {
      dispatch({ type: "GET_USERS", payload: data });
    }
  };

  // ✅ Delete User
  const handleDeleteUser = async (id) => {
    const deleted = await api.userApi.deleteUser(id);
    if (deleted) {
      dispatch({ type: "DELETE_USER", payload: id });
    }
  };

  // ✅ Add or Update User
  const addAndUpdateUser = async (userData, id = null) => {
    if (id) {
      const updatedUser = await api.userApi.updateUser(userData, id);
      if (updatedUser) {
        dispatch({ type: "UPDATE_USER", payload: updatedUser });
      }
    } else {
      const createdUser = await api.userApi.createUser(userData);
      if (createdUser) {
        dispatch({ type: "CREATE_USER", payload: createdUser });
      }
    }
  };

  // ✅ Load users on mount
  useEffect(() => {
    fetchAllUsers();
  }, []);

  const value = {
    users,
    addAndUpdateUser,
    handleDeleteUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;

// 4️⃣ Custom Hook
export const useUsers = () => useContext(UserContext);
