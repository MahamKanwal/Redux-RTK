import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API_URL}), 
  tagTypes: ["Users"],
  endpoints: () => ({}),
})

export default api;

