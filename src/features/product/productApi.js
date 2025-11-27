import { apiRequest } from "../../utils/helperFunctions";
import api from "../baseApi";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => apiRequest("/products"),
      providesTags: ["Products"],
    }),

    getProductById: builder.query({
      query: (id) => apiRequest(`/products/${id}`),
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),

    addProduct: builder.mutation({
      query: (newProduct) => apiRequest("/products", "POST", newProduct),
      invalidatesTags: ["Products"],
    }),

    updateProduct: builder.mutation({
      query: ({ id, ...data }) => apiRequest(`/products/${id}`, "PUT", data),
      invalidatesTags: (result, error, { id }) => [{ type: "Products", id }],
    }),

    deleteProduct: builder.mutation({
      query: (id) => apiRequest(`/products/${id}`, "DELETE"),
      invalidatesTags: (result, error, id) => [{ type: "Products", id }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;

export default productApi;

