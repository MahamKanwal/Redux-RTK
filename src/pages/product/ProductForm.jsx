import { useEffect, useState } from "react";
import { FaDollarSign, FaListCheck, FaLayerGroup } from "react-icons/fa6";
import Drawer from "../../components/Drawer";
import FormGenerator from "../../components/FormElements/FormGenerator";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions,} from "../../features/product/productSlice";
import { FaShoppingBag } from "react-icons/fa";
import { apiUrl } from "../../Api";
import axios from "axios";

const ProductForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (product) => {
    if (id){
      dispatch(productActions.updateItem({item: product,id}))
    }
    else{
      dispatch(productActions.addItem({...product,id: String(Date.now())}));
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
        { name: "product_image",
           type: "image", 
           required: true},
  ];

  const getProduct = async () => {
    if (id) {
      const { data }= await axios.get(`${apiUrl}/products/${id}`);
      setProduct(data);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <>
      <Drawer title={`${id ? "Update" : "Add"} Product`}>
        <FormGenerator
          fields={productFormFields}
          defaultValues={product}
          onSubmit={handleSubmit}
        />
      </Drawer>
    </>
  );
};

export default ProductForm;
