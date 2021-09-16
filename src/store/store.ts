import { createStore } from "redux";
import { notesReducer } from "reducers/reducers";
export const store = createStore(notesReducer);
