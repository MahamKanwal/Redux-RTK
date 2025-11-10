import DynamicTable from "../../components/DynamicTable";
import { useProducts } from "../../contexts/ProductContext";

const ProductTable = () => {
  const { products, handleDeleteProduct } = useProducts();
  const handleDelete = (id) => {
    handleDeleteProduct(id);
  };
  const productTableColumns = ["product_name", "category", "brand", "price"];
  return (
    <>
      <DynamicTable
        columns={productTableColumns}
        data={products}
        onDelete={handleDelete}
        onEditLink={"/products/edit"}
      />
    </>
  );
};

export default ProductTable;
