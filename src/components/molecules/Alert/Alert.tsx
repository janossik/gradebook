import Title from "components/atoms/Title/Title";
import { IAlert } from "types/types";
import { Wrapper } from "./Alert.styles";

const Alert = ({ title = "Oops!", message }: IAlert) => {
  return (
    <Wrapper>
      <Title color="error">{title}</Title>
      <Title as="p" color="error" fontSize="s" fontWeight="regular">
        {message}
      </Title>
    </Wrapper>
  );
};

export default Alert;
