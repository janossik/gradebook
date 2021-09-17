import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groupApi = createApi({
  reducerPath: "groupsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => "groups",
    }),
  }),
});

export const { useGetGroupsQuery } = groupApi;
