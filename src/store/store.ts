import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initialNotesState = [
  {
    id: "1",
    title: "Quis sit consequat elit ex minim.",
    content:
      "Eu dolore nulla et esse eiusmod officia voluptate sunt. Incididunt duis mollit labore non deserunt esse incididunt elit pariatur.",
  },
];

const notesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  tagTypes: ["Notes"],
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => "notes",
      providesTags: ["Notes"],
    }),
    addNote: builder.mutation({
      query: (body) => ({
        url: "notes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Notes"],
    }),
    removeNote: builder.mutation({
      query: (body) => ({
        url: "notes",
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Notes"],
    }),
  }),
});

export const { useGetNotesQuery, useAddNoteMutation, useRemoveNoteMutation } = notesApi;

export const notesSlice = createSlice({
  name: "notes",
  initialState: initialNotesState,
  reducers: {
    addNote(state, { payload }) {
      state.push({ id: Math.round(Math.random() * Math.pow(10, 10)).toString(16), ...payload });
    },
    removeNote(state, { payload: { id } }) {
      return state.filter((note) => note.id !== id);
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
    notes: notesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notesApi.middleware),
});
