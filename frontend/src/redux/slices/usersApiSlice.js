import { ApiSlice } from "./ApiSlice";

export const usersApiSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (user) => ({
        url: "/api/users/register",
        method: "POST",
        body: user,
      }),
    }),
    userLogin: builder.mutation({
      query: (user) => ({
        url: "/api/users/login",
        method: "POST",
        body: user,
      }),
    }),
    userLogout: builder.mutation({
      query: () => ({
        url: "/api/users/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserRegisterMutation,
  useUserLogoutMutation,
} = usersApiSlice;
