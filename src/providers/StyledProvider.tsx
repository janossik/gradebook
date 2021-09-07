import { ThemeProvider } from "styled-components";
import { theme } from "theme/theme";
import GlobalStyle from "theme/GlobalStyle";

const StyledProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledProvider;
