// In your parent component
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { useGetProductsQuery } from "../../features/product/productApi";
import ProductCard from "./ProductCard";

const ProductCards = () => {
  const { data , isLoading, isError, error, refetch} = useGetProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error message={error.error} onRetry={refetch} />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
