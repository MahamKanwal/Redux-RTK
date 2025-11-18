import { useDispatch } from "react-redux";
import DynamicTable from "../../components/DynamicTable";
import { productActions } from "../../features/product/productSlice";


const ProductTable = ({products}) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
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
