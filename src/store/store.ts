import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialNotesState = [
  {
    id: "1",
    title: "Quis sit consequat elit ex minim.",
    content:
      "Eu dolore nulla et esse eiusmod officia voluptate sunt. Incididunt duis mollit labore non deserunt esse incididunt elit pariatur.",
  },
];

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
    notes: notesSlice.reducer,
  },
});
