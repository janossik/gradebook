import Navigation from "components/organisms/Navigation/Navigation";
import UsersProvider from "providers/UsersProvider";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/theme";
import { Wrapper } from "./MainTemplate.styles";

const MainTemplate = ({ children, widthOutNav }: { children: JSX.Element; widthOutNav?: boolean }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!widthOutNav && <Navigation />}
      <UsersProvider>
        <Wrapper>{children}</Wrapper>
      </UsersProvider>
    </ThemeProvider>
  );
};

export default MainTemplate;
