import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type TypeHandleInput = (e: ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string>>) => void;
