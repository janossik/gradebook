import { TypeFiledInput } from "types/types";
import { Input } from "./FiledInput.styles";

const FiledInput: TypeFiledInput = ({
  type,
  name,
  minLength,
  placeholder,
  children,
  value,
  onChange,
  min,
  max,
  step,
}) => {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <Input
        min={min}
        max={max}
        step={step}
        type={type}
        minLength={minLength}
        name={name}
        data-testid={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};

export default FiledInput;
