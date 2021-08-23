import { ChangeEvent, Dispatch, SetStateAction } from "react";

export type TypeHandleInput = (e: ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string>>) => void;

export interface PropsFiledInput {
  name: string;
  children: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}

export type TypeFiledInput<Props = {}> = (props: Props & PropsFiledInput) => JSX.Element;

export interface PropsUserListItem {
  id: string;
  score: number;
  name: string;
  attendance: number;
}
