import { configureStore } from "@reduxjs/toolkit";
import { groupApi } from "./api/groups";
import { notesApi } from "./api/notes";
import { studentsApi } from "./api/students";

// export const notesSlice = createSlice({
//   name: "notes",
//   initialState: initialNotesState,
//   reducers: {
//     addNote(state, { payload }) {
//       state.push({ id: Math.round(Math.random() * Math.pow(10, 10)).toString(16), ...payload });
//     },
//     removeNote(state, { payload: { id } }) {
//       return state.filter((note) => note.id !== id);
//     },
//   },
// });

// export const { addNote, removeNote } = notesSlice.actions;

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
    [groupApi.reducerPath]: groupApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notesApi.middleware, groupApi.middleware, studentsApi.middleware),
});
