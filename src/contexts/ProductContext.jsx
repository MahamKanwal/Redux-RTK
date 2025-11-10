import { useState, createContext, useContext, useEffect } from "react";
import api from "../Api";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const handleDeleteProduct = async (id) => {
    const deleteProduct = await api.productApi.deleteProduct(id);
    if (deleteProduct) {
      const updatedProduct = products.filter((product) => product.id != id);
      setProducts(updatedProduct);
    }
  };

  const addAndUpdateProduct = async (newProduct, id = null) => {
    if (id) {
      const product = await api.productApi.updateProduct(newProduct, id);
      if (!product) return;
      const updateProducts = products.map((oldProduct) =>
        oldProduct.id == id ? product : oldProduct
      );
      setProducts(updateProducts);
    } else {
      const newProductWithId = {
        ...newProduct,
        id: String(products.length + 1),
      };
      const product = await api.productApi.createProduct(newProductWithId);
      if (!product) return;
      setProducts([...products, product]);
    }
  };

  const fetchAllProducts = async () => {
    const products = await api.productApi.getAllProducts();
    if (!products) return;
    setProducts(products);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const productContextValue = {
    products,
    addAndUpdateProduct,
    handleDeleteProduct,
  };

  return (
    <ProductContext.Provider value={productContextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useProducts = () => useContext(ProductContext);
