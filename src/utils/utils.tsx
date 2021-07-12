import { TypeHandleInput } from "types/types";

export const handleInput: TypeHandleInput = (e, setValue) => setValue(e.target.value);

export const childNodesToArray = (element: HTMLElement) => {
  const childNodes: any[] = [];
  element.childNodes.forEach((childNode) => {
    childNodes.push(childNode);
  });
  return childNodes;
};
