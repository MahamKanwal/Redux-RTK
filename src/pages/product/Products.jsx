import { NavLink, Outlet } from "react-router-dom";
import ProductTable from "./ProductTable";
import { useStore } from "../../hooks/useStore";
import { productActions } from "../../features/product/productSlice";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Products = () => {
  const { products, dispatch } = useStore("products");
  const { loading, items, error } = products;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Error
        message={error}
        onRetry={() => dispatch(productActions.fetchItems)}
      />
    );
  }

  return (
    <div className="mt-4">
      <NavLink
        to="/products/create"
        className="px-4 py-2 bg-gray-100 text-black rounded-lg mr-auto font-medium"
      >
        Add Products
      </NavLink>
      <ProductTable products={items} />
      <Outlet />
    </div>
  );
};

export default Products;
