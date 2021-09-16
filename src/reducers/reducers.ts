import { IGlobalState, INoteAction } from "types/types";
import { TypeActions } from "utils/utils";

const initialState = {
  notes: [
    {
      id: "1",
      title: "Quis sit consequat elit ex minim.",
      content:
        "Eu dolore nulla et esse eiusmod officia voluptate sunt. Incididunt duis mollit labore non deserunt esse incididunt elit pariatur.",
    },
    {
      id: "2",
      title: "Qui do dolore ad aute ad ea laborum cupidatat Lorem do.",
      content: "Sunt irure est laboris commodo ullamco velit in quis anim eu eiusmod aliquip consequat.",
    },
    {
      id: "3",
      title: "Ullamco laboris esse quis amet veniam consequat ut ut.",
      content:
        "Nisi mollit consequat ea ipsum voluptate qui aliqua nulla labore consectetur irure. Aute id aliquip qui nostrud consequat. Nostrud elit ex aute et.",
    },
    {
      id: "4",
      title: "Pariatur eiusmod laborum voluptate enim anim amet est Lorem do fugiat eu voluptate ea nostrud.",
      content:
        "Exercitation tempor proident non est id quis minim sunt commodo Lorem labore magna. Exercitation ut dolore incididunt id laboris ad pariatur.",
    },
  ],
};

export const notesReducer = (state: IGlobalState = initialState, { type, payload }: INoteAction) => {
  switch (type) {
    case TypeActions.ADD_NOTE:
      return { ...state, notes: [...state.notes, payload] };
    case TypeActions.REMOVE_NOTE:
      return { ...state, notes: state.notes.filter(({ id }) => id !== payload.id) };
    default:
      return state;
  }
};
