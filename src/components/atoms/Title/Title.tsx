import styled from "styled-components";

const TitleBody = styled.h3`
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.color.background};
`;

const Title = ({ as, children }: { as?: "h4" | "h3" | "h2" | "h1"; children: string }) => (
  <TitleBody as={as ? as : "h3"}>{children}</TitleBody>
);

export default Title;
