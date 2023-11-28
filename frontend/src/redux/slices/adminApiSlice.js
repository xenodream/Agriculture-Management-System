import { ApiSlice } from "./ApiSlice";

export const adminApiSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBasicUserInfo: builder.query({
      query: () => ({
        url: "/api/admin/getWorkerBasicInfo",
      }),
    }),
    getAllBasicUserInfo: builder.query({
      query: () => ({
        url: "/api/admin/getAllWorkerBasicInfo",
      }),
    }),
    getWorkerDetails: builder.query({
      query: (id) => ({
        url: `/api/admin/worker/${id}`,
      }),
    }),
    updateWorkerDetails: builder.mutation({
      query: (data) => ({
        url: `/api/admin/updateWorker`,
        method: "PUT",
        body: data,
      }),
    }),
    getWorkersSalary: builder.query({
      query: () => ({
        url: `/api/admin/workersSalary`,
      }),
    }),
    getAllWorkersSalary: builder.query({
      query: () => ({
        url: `/api/admin/allWorkersSalary`,
      }),
    }),
    getWorkersMachineryUsage: builder.query({
      query: () => ({
        url: `/api/admin/workersMachineryUsage`,
      }),
    }),
    getAllWorkersMachineryUsage: builder.query({
      query: () => ({
        url: `/api/admin/allWorkersMachineryUsage`,
      }),
    }),
    getWorkersWork: builder.query({
      query: () => ({
        url: `/api/admin/workersWork`,
      }),
    }),
    getAllWorkersWork: builder.query({
      query: () => ({
        url: `/api/admin/allWorkersWork`,
      }),
    }),
  }),
});

export const {
  useGetBasicUserInfoQuery,
  useGetAllBasicUserInfoQuery,
  useGetWorkerDetailsQuery,
  useUpdateWorkerDetailsMutation,
  useGetWorkersSalaryQuery,
  useGetAllWorkersSalaryQuery,
  useGetWorkersMachineryUsageQuery,
  useGetAllWorkersMachineryUsageQuery,
  useGetWorkersWorkQuery,
  useGetAllWorkersWorkQuery,
} = adminApiSlice;
