import { NavLink, Outlet } from "react-router-dom";
import ProductTable from "./ProductTable";
import { useStore } from "../../hooks/useStore";
import { useEffect } from "react";
import { fetchProducts } from "../../features/product/productSlice";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Products = () => {
  const {product,dispatch} =   useStore("product");
  const { loading, products, error } = product;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} onRetry={() => dispatch(fetchProducts())} />;
  }
  

  return (
    <div className="mt-4">
      <NavLink
        to="/products/create"
        className="px-4 py-2 bg-gray-100 text-black rounded-lg mr-auto font-medium"
      >
        Add Products
      </NavLink>
      <ProductTable products={products}/>
      <Outlet />
    </div>
  );
};

export default Products;
