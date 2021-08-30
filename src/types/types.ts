import { ChangeEvent, Dispatch, SetStateAction } from "react";

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

export interface PropsUserListItem {
  id: string;
  score: number;
  name: string;
  attendance: number;
  consents?: boolean;
}

export interface Color {
  color?: "primary" | "secondary" | "trinary" | "background" | "text";
}

export interface FontSize {
  fontSize?: "xs" | "s" | "m" | "l" | "xl";
}

export interface FontWeight {
  fontWeight?: "light" | "regular" | "medium" | "bold";
}

export interface PropsTitle extends Color, FontSize, FontWeight {}

export interface NewsProps {
  id?: string;
  title: string;
  category: string;
  content: string;
  image?: { url: string };
  alt?: string;
}
