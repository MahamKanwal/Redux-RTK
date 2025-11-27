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


import { createSlice } from "@reduxjs/toolkit";

export const createCrudSlice = ({name = "",initialState = {},reducers = {},}) => {
  
  const slice = createSlice({
    name,
    initialState: {
      ...initialState,
    },
    reducers,
  });

  return {
    reducer: slice.reducer,
    actions: slice.actions,
  };
};

