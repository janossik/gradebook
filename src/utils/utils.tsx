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
  FIRSTNAME = "firstName",
  LASTNAME = "lastName",
  SCORE = "score",
  ATTENDANCE = "attendance",
  CONSENTS = "consents",
}

export const initialValuesFormAddUser = {
  [UserProps.FIRSTNAME]: "",
  [UserProps.LASTNAME]: "",
  [UserProps.SCORE]: 0,
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
    name: UserProps.FIRSTNAME,
    children: "First Name",
  },
  {
    placeholder: "Write your last name",
    name: UserProps.LASTNAME,
    children: "Last Name",
  },
  {
    name: UserProps.SCORE,
    children: "Score",
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
    max: 1,
    step: 0.01,
  },
];

export const getID = () => Math.round(Math.random() * Math.pow(10, 10)).toString(16);
