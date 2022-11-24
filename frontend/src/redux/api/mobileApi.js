import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mobileApi = createApi({
  reducerPath: "mobileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),

  endpoints: (builder) => ({
    getAllMobile: builder.query({
      query: () => ({
        url: "mobiles",
        method: "GET",
      }),
    }),

    getSingleMobile: builder.query({
      query: (id) => ({
        urL: `mobiles/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllMobileQuery, useGetSingleMobileQuery } = mobileApi;
