import { FaDollarSign, FaListCheck, FaLayerGroup } from "react-icons/fa6";
import Drawer from "../../components/Drawer";
import FormGenerator from "../../components/FormElements/FormGenerator";
import { useParams } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useAddProductMutation, useGetProductByIdQuery, useUpdateProductMutation } from "../../features/product/productApi";

const ProductForm = () => {
  const { id } = useParams();
  const {data} = useGetProductByIdQuery(id, { skip: !id });
  const [updateProduct] = useUpdateProductMutation();
  const [addProduct] = useAddProductMutation();
 
  const handleSubmit = (product) => {
    if (id) {
    updateProduct({ id, ...product });
    } else {
   addProduct(product);
    }
  };

  const productFormFields = [
    {
      name: "product_name",
      icon: <FaShoppingBag className="text-purple-500" />,
      required: true,
      min: 3,
    },
    {
      name: "price",
      icon: <FaDollarSign className="text-sky-500" />,
      type: "number",
      required: true,
    },
    {
      name: "category",
      icon: <FaLayerGroup className="text-rose-500" />,
      type: "select",
      required: true,
      options: [
        "Electronics",
        "Clothing",
        "Footwear",
        "Beauty & Personal Care",
        "Books and Stationery",
      ],
    },
    {
      name: "brand",
      icon: <FaListCheck className="text-emerald-500" />,
      type: "select",
      required: true,
      options: ["Nike", "Adidas", "Samsung", "Apple", "Sony"],
    },
    { name: "product_image", type: "image", required: true },
  ];

  return (
    <>
      <Drawer title={`${id ? "Update" : "Add"} Product`}>
        <FormGenerator
          fields={productFormFields}
          defaultValues={data}
          onSubmit={handleSubmit}
        />
      </Drawer>
    </>
  );
};

export default ProductForm;
