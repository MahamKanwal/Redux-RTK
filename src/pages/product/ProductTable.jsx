import { useDispatch } from "react-redux";
import DynamicTable from "../../components/DynamicTable";
import { useProducts } from "../../contexts/ProductContext";
import { productActions } from "../../features/product/productSlice";


const ProductTable = ({products}) => {
  // const { products, handleDeleteProduct } = useProducts();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    // handleDeleteProduct(id);
    dispatch(productActions.deleteItem(id))
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
