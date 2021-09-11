import { ChangeEvent, Dispatch, MouseEventHandler, SetStateAction } from "react";

export type TypeHandleInput = (e: ChangeEvent<HTMLInputElement>, setValue: Dispatch<SetStateAction<string>>) => void;

export interface PropsFiledInput {
  name: string;
  children: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  minLength?: number;
  min?: number;
  max?: number;
  step?: number;
  type?: string;
}

export type TypeFiledInput<Props = {}> = (props: Props & PropsFiledInput) => JSX.Element;

export interface IUser {
  id: string,
  index: string,
  name: string,
  attendance: string,
  average: number,
  group: string,
  course: string,
  subjects: { name: string }[],
  grades: { id: string, subject: string, average: number }[]
}

export interface ITeacher {
  id: string,
  name: string,
  subjects: { name: string }[],
  login: string,
  password: string
}

export interface PropsUserListItem extends IUser {
  consents?: boolean;
}

export interface Color {
  color?: "primary" | "secondary" | "trinary" | "background" | "text" | "error";
}

export interface FontSize {
  fontSize?: "xs" | "s" | "m" | "l" | "xl";
}

export interface FontWeight {
  fontWeight?: "light" | "regular" | "medium" | "bold";
}
export interface Inputs {
  login: string;
  password: string;
}

export interface PropsTitle extends Color, FontSize, FontWeight { }

export interface NewsProps {
  id?: string;
  title: string;
  category: string;
  content: string;
  image?: { url: string };
  alt?: string;
}

export interface IMenuGroup {
  id: string;
  groups: string[];
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export interface IModal {
  active?: boolean;
  children: JSX.Element;
  maxWidth?: string;
  minWidth?: string;
  maxHeight?: string;
  closeAction: () => void;
}
export interface IHeader {
  title: string;
  category: string | JSX.Element;
  children?: JSX.Element;
}

export interface IMenuLink {
  to: string;
  children: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export interface IListGrades {
  isShow?: boolean;
  handleShow?: () => void;
  title?: string;
  grades: { id: string; subject: string; average: number }[];
}

export interface IAlert {
  title?: string;
  message: string;
}
