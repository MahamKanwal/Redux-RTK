import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const { data } = await axios.get("http://localhost:5000/users");
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {},
  extraReducers: (b) => {
    b.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default userSlice.reducer;
