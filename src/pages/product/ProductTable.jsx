import { toast } from "react-toastify";
import DynamicTable from "../../components/DynamicTable";
import { useDeleteProductMutation } from "../../features/product/productApi";

const ProductTable = ({ products }) => {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = (id) => {
    deleteProduct(id);
    toast.success("Product deleted successfully!");
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
