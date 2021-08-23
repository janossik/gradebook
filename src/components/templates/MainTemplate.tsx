import Navigation from "components/organisms/Navigation/Navigation";
import UsersProvider from "providers/UsersProvider";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import { theme } from "theme/theme";
import { Wrapper } from "./MainTemplate.styles";

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
