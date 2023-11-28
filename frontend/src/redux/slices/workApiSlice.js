import { ApiSlice } from "./ApiSlice";

export const workApiSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerWork: builder.mutation({
      query: (work) => ({
        url: "/api/work/saveWork",
        method: "POST",
        body: work,
      }),
    }),
    getLatestDays: builder.query({
      query: () => ({
        url: "/api/work/getLatestDays",
      }),
    }),
    getAllDays: builder.query({
      query: () => ({
        url: "/api/work/getAllDays",
      }),
    }),
    getLatestMonthlySalary: builder.query({
      query: () => ({
        url: "/api/work/getLatestMonthlySalary",
      }),
    }),
    getMonthlySalary: builder.query({
      query: () => ({
        url: "/api/work/getMonthlySalary",
      }),
    }),
    getLatestMachineryUsage: builder.query({
      query: () => ({
        url: "/api/work/getLatestMachineryUsage",
      }),
    }),
    getMachineryUsage: builder.query({
      query: () => ({
        url: "/api/work/getMachineryUsage",
      }),
    }),
  }),
});

export const {
  useRegisterWorkMutation,
  useGetLatestDaysQuery,
  useGetAllDaysQuery,
  useGetLatestMonthlySalaryQuery,
  useGetMonthlySalaryQuery,
  useGetLatestMachineryUsageQuery,
  useGetMachineryUsageQuery,
} = workApiSlice;
