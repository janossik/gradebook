import MenuLink from "components/atoms/MenuLink/MenuLink";
import Navigation from "components/organisms/Navigation/Navigation";
import UsersProvider from "providers/UsersProvider";
import { useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/theme";

//calc(clamp(300px, 100%, 30%) + 20px)
const Wrapper = styled.main`
  display: flex;
  padding: 20px 20px 20px 20px;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    padding: 40px 10px 0;
  }
`;

const MainTemplate: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
      <UsersProvider>
        <Wrapper>{children}</Wrapper>
      </UsersProvider>
    </ThemeProvider>
  );
};

export default MainTemplate;
