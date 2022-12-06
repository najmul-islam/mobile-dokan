import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const brandApi = createApi({
  reducerPath: "brandApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),

  endpoints: (builder) => ({
    getAllBrand: builder.query({
      query: () => ({
        url: "brands",
        method: "GET",
      }),
    }),

    getSingleBrand: builder.query({
      query: (brandslug) => ({
        url: `brands/${brandslug}`,
        method: "GET",
      }),
    }),

    // getBrandMobiles: builder.query({
    //   query: (brandslug) => ({
    //     url: `brands/${brandslug}`,
    //     method: "GET",
    //   }),
    // }),
  }),
});

export const {
  useGetAllBrandQuery,
  useGetSingleBrandQuery,
  // useGetBrandMobilesQuery,
} = brandApi;
