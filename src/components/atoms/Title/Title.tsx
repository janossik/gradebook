import styled from "styled-components";
import { PropsTitle } from "types/types";

const Title = styled.h3<PropsTitle & { capitalize?: boolean }>`
  font-size: ${({ theme, fontSize }) => (fontSize ? theme.font.size[fontSize] : theme.font.size["m"])};
  color: ${({ color, theme }) => (color ? theme.color[color] : theme.color["primary"])};
  font-weight: ${({ theme, fontWeight }) => (fontWeight ? theme.font.weight[fontWeight] : theme.font.weight["bold"])};
  margin-bottom: 10px;
  text-transform: ${({ capitalize }) => capitalize && "capitalize"};
`;

export default Title;
