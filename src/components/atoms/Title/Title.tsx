import styled from "styled-components";
import { PropsTitle } from "types/types";

const Title = styled.h3<PropsTitle>`
  font-size: ${({ theme, fontSize }) => (fontSize ? theme.font.size[fontSize] : theme.font.size["m"])};
  color: ${({ color, theme }) => (color ? theme.color[color] : theme.color["primary"])};
  font-weight: ${({ theme, fontWeight }) => (fontWeight ? theme.font.weight[fontWeight] : theme.font.weight["bold"])};
  margin-bottom: 10px;
`;

export default Title;
