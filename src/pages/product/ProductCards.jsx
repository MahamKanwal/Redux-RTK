// In your parent component
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { productActions } from "../../features/product/productSlice";
import { useStore } from "../../hooks/useStore";
import ProductCard from "./ProductCard";

const ProductCards = () => {
  const { products } = useStore("products");
  const { items, error, loading } = products;
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} onRetry={productActions.fetchItems} />;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
