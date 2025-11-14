// import axios from "axios";
// import { createAsyncThunk, createSlice, isPending, isRejected, isFulfilled } from "@reduxjs/toolkit";

// const API_URL = "http://localhost:5000/users";

// const initialState = {
//   users: [],
//   loading: false,
//   error: null,
// };

// // 🔹 Async Thunks
// export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
//   const { data } = await axios.get(API_URL);
//   return data;
// });

// export const addUsers = createAsyncThunk("user/addUsers", async (user) => {
    //   const { data } = await axios.post(API_URL, user);
    //   return data;
    // });
    
    // export const deleteUsers = createAsyncThunk("user/deleteUsers", async (userId) => {
        //   await axios.delete(`${API_URL}/${userId}`);
        //   return userId;
        // });
        
        // export const updateUsers = createAsyncThunk("user/updateUsers", async ({ userId, user }) => {
            //   const { data } = await axios.put(`${API_URL}/${userId}`, user);
//   return data;
// });

// // 🔹 Slice
// const userSlice = createSlice({
    //   name: "user",
    //   initialState,
    //   reducers: {},
    //   extraReducers: (builder) => {
        //     builder
        //       // Specific success handlers
        //       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.users = action.payload;
//       })
//       .addCase(addUsers.fulfilled, (state, action) => {
    //         state.users.push(action.payload);
    //       })
    //       .addCase(deleteUsers.fulfilled, (state, action) => {
        //         state.users = state.users.filter((u) => u.id !== action.payload);
        //       })
        //       .addCase(updateUsers.fulfilled, (state, action) => {
            //         state.users = state.users.map((u) =>
                //           u.id === action.payload.id ? action.payload : u
        //         );
        //       })
        
        //       // 🔥 Global matchers for all thunks
        //       .addMatcher(isPending(fetchUsers, addUsers, deleteUsers, updateUsers), (state) => {
            //         state.loading = true;
            //         state.error = null;
            //       })
            //       .addMatcher(isRejected(fetchUsers, addUsers, deleteUsers, updateUsers), (state, action) => {
                //         state.loading = false;
                //         state.error = action.error.message;
                //       })
                //       .addMatcher(isFulfilled(fetchUsers, addUsers, deleteUsers, updateUsers), (state) => {
                    //         state.loading = false;
                    //       });
                    //   },
                    // });
                    
                    // export default userSlice.reducer;
                    
                    
                    // userSlice.js
import { createCrudSlice } from "../createCrudSlice";
import { apiUrl } from "../../Api";

 export const {reducer: userReducer, actions: userActions} = createCrudSlice("user", `${apiUrl}/users`);


