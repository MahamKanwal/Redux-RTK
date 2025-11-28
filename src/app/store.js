// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import api from "../features/baseApi";

// Slices
import { userReducer } from "../features/user/userSlice";
import { themeReducer } from "../features/theme/themeSlice";

// Root Reducer
const rootReducer = combineReducers({
  users: userReducer,
 darkMode: themeReducer,
  [api.reducerPath]: api.reducer,   // RTK Query Reducer
});

// Store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // RTK Query Middleware
});


