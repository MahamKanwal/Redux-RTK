import { NavLink, Outlet } from "react-router-dom";
import ProductTable from "./ProductTable";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { useGetProductsQuery } from "../../features/product/productApi";

const Products = () => {
  const { data, isLoading, isError, error, refetch } = useGetProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error message={error.error} onRetry={refetch} />;
  }

  return (
    <div className="mt-4">
      <NavLink
        to="/products/create"
        className="px-4 py-2 bg-gray-100 text-black rounded-lg mr-auto font-medium"
      >
        Add Products
      </NavLink>
      <ProductTable products={data} />
      <Outlet />
    </div>
  );
};

export default Products;
