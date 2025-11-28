// import {
//   createAsyncThunk,
//   createSlice,
//   isFulfilled,
//   isPending,
//   isRejected,
// } from "@reduxjs/toolkit";
// import axios from "axios";

// export const createCrudSlice = ({
//   name = "",
//   url = "",
//   initialState = {},
//   crud = false,
//   reducers = {},
// }) => {

//   let fetchItems, addItem, deleteItem, updateItem;

//   if (crud) {
//     fetchItems = createAsyncThunk(`${name}/fetchItems`, async () => {
//       const { data } = await axios.get(url);
//       return data;
//     });

//     addItem = createAsyncThunk(`${name}/addItem`, async (item) => {
//       const { data } = await axios.post(url, item);
//       return data;
//     });

//     deleteItem = createAsyncThunk(`${name}/deleteItem`, async (id) => {
//       await axios.delete(`${url}/${id}`);
//       return id;
//     });

//     updateItem = createAsyncThunk(
//       `${name}/updateItem`,
//       async ({ id, item }) => {
//         const { data } = await axios.put(`${url}/${id}`, item);
//         return data;
//       }
//     );
//   }

//   const crudState = crud
//     ? {
//         items: [],
//         loading: false,
//         error: null,
//       }
//     : {};

//   const slice = createSlice({
//     name,
//     initialState: {
//       ...crudState,
//       ...initialState,
//     },
//     reducers,
//     extraReducers: (builder) => {
//       if (!crud) return;

//       builder
//         .addCase(fetchItems.fulfilled, (state, action) => {
//           state.items = action.payload;
//         })
//         .addCase(addItem.fulfilled, (state, action) => {
//           state.items.push(action.payload);
//         })
//         .addCase(deleteItem.fulfilled, (state, action) => {
//           state.items = state.items.filter(
//             (item) => item.id !== action.payload
//           );
//         })
//         .addCase(updateItem.fulfilled, (state, action) => {
//           state.items = state.items.map((item) =>
//             item.id === action.payload.id ? action.payload : item
//           );
//         })
//         .addMatcher(
//           isPending(fetchItems, addItem, deleteItem, updateItem),
//           (state) => {
//             state.loading = true;
//             state.error = null;
//           }
//         )
//         .addMatcher(
//           isFulfilled(fetchItems, addItem, deleteItem, updateItem),
//           (state) => {
//             state.loading = false;
//           }
//         )
//         .addMatcher(
//           isRejected(fetchItems, addItem, deleteItem, updateItem),
//           (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//           }
//         );
//     },
//   });

//   return {
//     reducer: slice.reducer,
//     actions: {
//       ...(crud
//         ? { addItem, fetchItems, deleteItem, updateItem }
//         : {}),
//       ...slice.actions,
//     },
//   };
// };

// userSlice.js
// import { createCrudSlice } from "../createCrudSlice";
// import { apiUrl } from "../../Api";

// const sliceArgs = {
//   name: "users",
//   url: `${apiUrl}/users`,
//   crud: true,
//   initialState: {
//     cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       const product = action.payload;
//       const existing = state.cartItems.find((item) => item.id === product.id);

//       if (existing) {
//         existing.quantity += 1;
//       } else {
//         state.cartItems.push({ ...product, quantity: 1 });
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },

//     removeFromCart: (state, action) => {
//       const id = action.payload;
//       const item = state.cartItems.find((i) => i.id === id);

//       if (!item) return;

//       state.cartItems = state.cartItems.filter((i) => i.id !== id);

//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },

//     increaseQty: (state, action) => {
//       const id = action.payload;
//       const item = state.cartItems.find((i) => i.id === id);

//       if (item) {
//         item.quantity += 1;
//       }

//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },

//     decreaseQty: (state, action) => {
//       const id = action.payload;
//       const item = state.cartItems.find((i) => i.id === id);

//       if (item.quantity > 1) {
//         item.quantity -= 1;
//       } else {
//         state.cartItems = state.cartItems.filter((i) => i.id !== id);
//       }

//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },

//     clearCart: (state) => {
//       state.cartItems = [];

//       localStorage.setItem("cartItems", JSON.stringify([]));
//     },
//   },
// };
// export const { reducer: userReducer, actions: userActions } =
//   createCrudSlice(sliceArgs);

// themeSlice.js
// import { createCrudSlice } from "../createCrudSlice";
// const sliceArgs = {
//   name: "darMode",
//   initialState: localStorage.getItem("darkMode") == "true",
//   reducers: {
//     toggleTheme: (state) => {
//       const newMode = !state;
//       localStorage.setItem("darkMode", newMode);
//       document.documentElement.classList[newMode ? "add" : "remove"]("dark");
//       return newMode;
//     },
//   },
// };
// export const { reducer: themeReducer, actions: themeActions } = createCrudSlice(sliceArgs);
