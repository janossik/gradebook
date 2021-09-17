import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/* const getStudentsByGroup = useCallback(
    async (groupID = ""): Promise<IUser[] | undefined> => {
      try {
        const { data } = await studentsAPI.get(`/groups/${groupID}`);
        return data.students;
      } catch (e) {
        dispatchError({ message: `You cant get students from the group ${groupID}` });
      }
    },
    [dispatchError]
  ); */

export const studentsApi = createApi({
  reducerPath: "studentsApi",
  tagTypes: ["Students"],
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: ({ id }) => {
        return {
          url: `students/${id}`,
          method: "get",
        };
      },
      providesTags: ["Students"],
    }),
  }),
});

export const { useGetStudentsQuery } = studentsApi;
