// userApi.js
import api from "../baseApi";
import { apiRequest } from "../../utils/helperFunctions";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // ---------------- GET ALL USERS ----------------
    getUsers: builder.query({
      query: () => apiRequest("/users"),
      providesTags: ["Users"],
    }),

    // ---------------- GET SINGLE USER ----------------
    getUserById: builder.query({
      query: (id) => apiRequest(`/users/${id}`),
      providesTags: (id) => [{ type: "Users", id }],
    }),

    // ---------------- CREATE USER ----------------
    addUser: builder.mutation({
      query: (newUser) => apiRequest("/users", "POST", newUser),
      invalidatesTags: ["Users"],
    }),

    // ---------------- UPDATE USER ----------------
    updateUser: builder.mutation({
      query: ({ id, ...data }) =>
        apiRequest(`/users/${id}`, "PUT", data),
     invalidatesTags: (result, error, id ) => [
    { type: "Users", id },
  ],
    }),

    // ---------------- DELETE USER ----------------
    deleteUser: builder.mutation({
      query: (id) => apiRequest(`/users/${id}`, "DELETE"),
     invalidatesTags: (result, error, id) => [
    { type: "Users", id },
  ],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

export default userApi;

