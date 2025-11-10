import axios from "axios";
import { apiUrl } from "./index";

const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/products`);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const createProduct = async (product) => {
  try {
    const { data } = await axios.post(`${apiUrl}/products`, product);
    return data;
  } catch (error) {
    console.error("Error creating product:", error);
  }
};

const deleteProduct = async (productId) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/products/${productId}`);
    return data;
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

const updateProduct = async (product, id) => {
  try {
    const { data } = await axios.put(`${apiUrl}/products/${id}`, product);
    return data;
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

const getProductById = async (productId) => {
  try {
    const { data } = await axios.get(`${apiUrl}/products/${productId}`);
    return data;
  } catch (error) {
    console.log("Error fetching product by ID:", error);
  }
};

const productApi = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductById,
};

export default productApi;
