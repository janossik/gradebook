import { TypeHandleInput } from "types/types";

export const handleInput: TypeHandleInput = (e, setValue) => setValue(e.target.value);

export const childNodesToArray = (element: HTMLElement) => {
  const childNodes: any[] = [];
  element.childNodes.forEach((childNode) => {
    childNodes.push(childNode);
  });
  return childNodes;
};

export enum UserProps {
  NAME = "name",
  AVERAGE = "average",
  ATTENDANCE = "attendance",
  CONSENTS = "consents",
}
export interface IUser {
  id: string;
  name: string;
  attendance: string;
  average: string;
  group: string;
}

export const initialValuesFormAddUser = {
  [UserProps.NAME]: "",
  [UserProps.AVERAGE]: 0,
  [UserProps.ATTENDANCE]: 0,
  [UserProps.CONSENTS]: false,
};

export const formFields: {
  name: string;
  children: string;
  placeholder?: string;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
}[] = [
  {
    placeholder: "Write your first name",
    name: UserProps.NAME,
    children: "Name",
  },
  {
    name: UserProps.AVERAGE,
    children: UserProps.AVERAGE,
    type: "number",
    min: 0,
    max: 6,
    step: 0.5,
  },
  {
    name: UserProps.ATTENDANCE,
    children: "attendance",
    type: "number",
    min: 0,
    max: 100,
    step: 1,
  },
];

export const getID = () => Math.round(Math.random() * Math.pow(10, 10)).toString(16);

export const debounce = <F extends (...args: any) => any>(func: F, waitFor: number) => {
  let timeout: number = 0;

  const debounced = (...args: any) => {
    clearTimeout(timeout);
    setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
