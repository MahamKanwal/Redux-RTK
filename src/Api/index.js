import productApi from "./productApi";
import userApi from "./userApi";

export const apiUrl = import.meta.env.VITE_API_URL;
const api = {
  userApi,
  productApi,
};

export default api;
