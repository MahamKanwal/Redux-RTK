// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//     products:[],
//     loading: false,
//     error: null,
// };

// export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
//     const { data } = await axios.get("http://localhost:5000/products");
//     return data;
// });

// export const addProducts = createAsyncThunk("product/addProducts", async (product) => {
//     const { data } = await axios.post("http://localhost:5000/products",product);
//     return data;
// });

// export const deleteProducts = createAsyncThunk("product/deleteProducts", async (productId) => {
//     const { data } = await axios.delete(`http://localhost:5000/products/${productId}`);
//     return data;
// });

// export const updateProducts = createAsyncThunk("product/updateProducts", async (product,productId) => {
// const { data } = await axios.put(`http://localhost:5000/products/${productId}`,product);
// return data;
// });

// const productSlice = createSlice({
//     name : "product",
//     initialState,
//     reducer: {},
//     extraReducers: (b) => {
//      b.addCase(fetchProducts.pending, (state)=>{
//         state.loading = true;
//      })
//     .addCase(fetchProducts.fulfilled, (state,action)=>{
//         state.loading = false;
//         state.products = action.payload;
//      })
//      .addCase(fetchProducts.rejected,(state,action)=>{
//         state.loading = false;
//         state.error = action.error.message;
//      })
//      .addCase(addProducts.pending, (state)=>{
//         state.loading = true;
//      })
//     .addCase(addProducts.fulfilled, (state,action)=>{
//         state.loading = false;
//         state.products.push(action.payload);
//      })
//      .addCase(addProducts.rejected,(state,action)=>{
//         state.loading = false;
//         state.error = action.error.message;
//      })
//      .addCase(deleteProducts.pending, (state)=>{
//         state.loading = true;
//      })
//     .addCase(deleteProducts.fulfilled, (state,action)=>{
//         state.loading = false;
//        const products = state.products.filter(product => product.id != action.payload.id);
//        state.products = products;
//      })
//      .addCase(deleteProducts.rejected,(state,action)=>{
//         state.loading = false;
//         state.error = action.error.message;
//      })
//      .addCase(updateProducts.pending, (state)=>{
//         state.loading = true;
//      })
//      .addCase(updateProducts.fulfilled, (state,action)=>{
//         state.loading = false;
//        const products = state.products.map(product => product.id === action.payload.id ? action.payload : product);
//        state.products = products;
//      })
//      .addCase(updateProducts.rejected,(state,action)=>{
//         state.loading = false;
//         state.error = action.error.message;
//      })
//     },
// });

// export default productSlice.reducer;

import { createCrudSlice } from "../createCrudSlice";
import { apiUrl } from "../../Api";

 export const {reducer: productReducer, actions: productActions} = createCrudSlice("product", `${apiUrl}/products`);