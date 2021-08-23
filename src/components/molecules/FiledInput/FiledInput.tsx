import { TypeFiledInput } from "types/types";
import { Input } from "./FiledInput.styles";

const FiledInput: TypeFiledInput = ({ name, placeholder, children, value, onChange, min, max, step }) => {
  if (typeof value === "number") {
    return (
      <>
        <label htmlFor={name}>{children}</label>
        <Input type="number" min={min} max={max} step={step} value={value} onChange={onChange} name={name} required />
      </>
    );
  }
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <Input
        type="text"
        minLength={3}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};

export default FiledInput;
