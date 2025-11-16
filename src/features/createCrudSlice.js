import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createCrudSlice = (name, url) => {
  // Async thunks
  const fetchItems = createAsyncThunk(`${name}/fetch`, async () => {
    const { data } = await axios.get(url);
    return data;
  });

  const addItem = createAsyncThunk(`${name}/add`, async (item) => {
    const { data } = await axios.post(url, item);
    return data;
  });

  const updateItem = createAsyncThunk(
    `${name}/update`,
    async ({ id, item }) => {
      const { data } = await axios.put(`${url}/${id}`, item);
      return data;
    }
  );

  const deleteItem = createAsyncThunk(`${name}/delete`, async (id) => {
    await axios.delete(`${url}/${id}`);
    return id;
  });
  const arrName = `${name}s`;
  const slice = createSlice({
    name,
    initialState: {
      [arrName]: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        // Fetch
        .addCase(fetchItems.fulfilled, (state, action) => {
          state[arrName] = action.payload;
        })
        // Add
        .addCase(addItem.fulfilled, (state, action) => {
          state[arrName].push(action.payload);
        })
        // Update
        .addCase(updateItem.fulfilled, (state, action) => {
          state[arrName] = state[arrName].map((i) =>
            i.id === action.payload.id ? action.payload : i
          );
        })
        // Delete
        .addCase(deleteItem.fulfilled, (state, action) => {
          state[arrName] = state[arrName].filter(
            (i) => i.id !== action.payload
          );
        })
        // Global pending
        .addMatcher(
          (action) =>
            action.type.startsWith(`${name}/`) &&
            action.type.endsWith("/pending"),
          (state) => {
            state.loading = true;
            state.error = null;
          }
        )
        // Global fulfilled
        .addMatcher(
          (action) =>
            action.type.startsWith(`${name}/`) &&
            action.type.endsWith("/fulfilled"),
          (state) => {
            state.loading = false;
          }
        )
        // Global rejected
        .addMatcher(
          (action) =>
            action.type.startsWith(`${name}/`) &&
            action.type.endsWith("/rejected"),
          (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          }
        );
    },
  });

  return {
    reducer: slice.reducer,
    actions: { fetchItems, addItem, updateItem, deleteItem },
  };
};
