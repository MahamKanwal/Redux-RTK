import api from "../baseApi";

const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
         getUser: builder.query({
            query: () => "/users",
            providedTags: ["Users"],
         })
        })
})

export const { useGetUserQuery } = userApi;