import { PropsFiledTextarea } from "types/types";
import { Wrapper } from "components/molecules/FiledInput/FiledInput.styles";
import Textarea from "components/atoms/Textarea/Textarea";

const FiledTextarea = ({ type, name, placeholder, children, value, onChange }: PropsFiledTextarea) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{children}</label>
      <Textarea name={name} data-testid={name} placeholder={placeholder} value={value} onChange={onChange} required />
    </Wrapper>
  );
};

export default FiledTextarea;
