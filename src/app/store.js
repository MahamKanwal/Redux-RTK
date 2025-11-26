import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import api from "../features/baseApi";

export const store = configureStore({
  reducer: {...rootReducer, [api.reducerPath]: api.reducer}, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

