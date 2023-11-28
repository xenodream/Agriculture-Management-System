import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const ApiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Work", "Admin"],
  endpoints: (builder) => ({}),
});
