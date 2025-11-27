// baseApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,  
  }),
  tagTypes: ["Users","Products"],
  endpoints: () => ({}),
});

export default api;
