import { TypeHandleInput } from "types/types";

export enum TypeActions {
  ADD_NOTE = "note/add",
  REMOVE_NOTE = "note/remove",
}

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

export const getAverages = (grades: any[]) => {
  const sum: any = {};
  const amount: any = {};
  const averages: any = [];

  for (const item of grades) {
    sum[item.subject] = sum[item.subject] ? sum[item.subject] + item.average : 0 + item.average;
    amount[item.subject] = amount[item.subject] ? amount[item.subject] + 1 : 1;
  }
  for (const item in sum) {
    averages.push({
      id: item,
      subject: item,
      average: Number((sum[item] / amount[item]).toFixed(2).toString()),
    });
  }
  return averages;
};

export const getAverage = (grades: any[]) =>
  grades[0]
    ? (
        grades
          .map((grade) => {
            return grade.average;
          })
          .reduce((pv, v) => pv + v) / grades.length
      ).toFixed(2)
    : 0;

export const notes = [
  {
    id: "1",
    title: "Quis sit consequat elit ex minim.",
    content:
      "Eu dolore nulla et esse eiusmod officia voluptate sunt. Incididunt duis mollit labore non deserunt esse incididunt elit pariatur. Nostrud proident esse reprehenderit dolor officia cillum incididunt. Proident non commodo ut dolor voluptate voluptate proident consectetur excepteur dolore irure qui culpa.",
  },
  {
    id: "123",
    title: "Qui do dolore ad aute ad ea laborum cupidatat Lorem do.",
    content:
      "Sunt irure est laboris commodo ullamco velit in quis anim eu eiusmod aliquip consequat. Pariatur dolore excepteur mollit nostrud incididunt pariatur ex laborum. Pariatur fugiat sit veniam occaecat. Consequat ea sunt ipsum mollit.",
  },
  {
    id: "12",
    title: "Ullamco laboris esse quis amet veniam consequat ut ut.",
    content:
      "Nisi mollit consequat ea ipsum voluptate qui aliqua nulla labore consectetur irure. Aute id aliquip qui nostrud consequat. Nostrud elit ex aute et.",
  },
  {
    id: "1234",
    title: "Pariatur eiusmod laborum voluptate enim anim amet est Lorem do fugiat eu voluptate ea nostrud.",
    content:
      "Exercitation tempor proident non est id quis minim sunt commodo Lorem labore magna. Exercitation ut dolore incididunt id laboris ad pariatur. Ex pariatur velit commodo pariatur eiusmod aliqua cillum ipsum.",
  },
];
