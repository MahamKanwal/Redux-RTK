import DynamicTable from "../../components/DynamicTable";
import { useDeleteProductMutation } from "../../features/product/productApi";

const ProductTable = ({ products }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const productTableColumns = [
    "product_image",
    "product_name",
    "category",
    "brand",
    "price",
  ];
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
