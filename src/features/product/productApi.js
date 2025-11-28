import { apiRequest, createTagOfData } from "../../utils/helperFunctions";
import api, { tags } from "../baseApi";
const { Products } = tags;

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => apiRequest("/products"),
      providesTags: (result) => createTagOfData(result, Products),
    }),

    getProductById: builder.query({
      query: (id) => apiRequest(`/products/${id}`),
      providesTags: (result, error, id) => [{ type: Products, id }],
    }),

    addProduct: builder.mutation({
      query: (newProduct) => apiRequest("/products", "POST", newProduct),
      invalidatesTags: [{ type: Products, id: "LIST" }],
    }),

    updateProduct: builder.mutation({
      query: ({ id, ...data }) => apiRequest(`/products/${id}`, "PUT", data),
      invalidatesTags: (result, error, { id }) => [
        { type: Products, id },
        { type: Products, id: "LIST" },
      ],
    }),

    deleteProduct: builder.mutation({
      query: (id) => apiRequest(`/products/${id}`, "DELETE"),
      invalidatesTags: (result, error, id) => [
        { type: Products, id },
        { type: Products, id: "LIST" },
      ],
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
