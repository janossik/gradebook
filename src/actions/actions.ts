import { INote } from "types/types";
import { TypeActions } from "utils/utils";

export const addNote = (payload: { title: string; content: string }): { type: string; payload: INote } => {
  return {
    type: TypeActions.ADD_NOTE,
    payload: { id: Math.round(Math.random() * Math.pow(10, 10)).toString(16), ...payload },
  };
};

export const removeNote = (payload: INote) => {
  return {
    type: TypeActions.REMOVE_NOTE,
    payload,
  };
};
