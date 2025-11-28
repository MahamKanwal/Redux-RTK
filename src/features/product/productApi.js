// productApi.js

import autoApi from "../autoApi";

const productApi = autoApi("products", "Products"); // singular name + tag
 
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
 
export default productApi;