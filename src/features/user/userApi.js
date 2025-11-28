// userApi.js
import api, { tags } from "../baseApi";
import { apiRequest, createTagOfData} from "../../utils/helperFunctions";

const { Users} =  tags;

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({

    // ---------------- GET ALL USERS ----------------
    getUsers: builder.query({
      query: () => apiRequest("/users"),
      providesTags: (result) =>
        // result
        //   ? [
        //       ...result.map(({ id }) => ({ type: Users, id })),
        //       { type: Users, id: "LIST" },
        //     ]
        //   : [{ type: Users, id: "LIST" }],
        createTagOfData(result, Users)
    }),

    // ---------------- GET SINGLE USER ----------------
    getUserById: builder.query({
      query: (id) => apiRequest(`/users/${id}`),
      providesTags: (result, error, id) => [{ type: Users, id }],
    }),

    // ---------------- CREATE USER ----------------
    addUser: builder.mutation({
      query: (newUser) => apiRequest("/users", "POST", newUser),
      invalidatesTags: [{ type: Users, id: "LIST" }],
    }),

    // ---------------- UPDATE USER ----------------
    updateUser: builder.mutation({
      query: ({ id, ...data }) =>
        apiRequest(`/users/${id}`, "PUT", data),
      invalidatesTags: (result, error, { id }) => [
        { type: Users, id },
        { type: Users, id: "LIST" },
      ],
    }),

    // ---------------- DELETE USER ----------------
    deleteUser: builder.mutation({
      query: (id) => apiRequest(`/users/${id}`, "DELETE"),
      invalidatesTags: (result, error, id) => [
        { type: Users, id },
        { type: Users, id: "LIST" },
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
