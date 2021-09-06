import { ThemeProvider } from "styled-components";
import { theme } from "theme/theme";
import GlobalStyle from "theme/GlobalStyle";
import Navigation from "components/organisms/Navigation/Navigation";
import NewsSection from "components/organisms/NewsSection/NewsSection";
import { Wrapper } from "./MainTemplate.styles";
import TopBar from "components/organisms/TopBar/TopBar";

const MainTemplate = ({ children, withoutElements }: { children: JSX.Element; withoutElements?: boolean }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!withoutElements && <Navigation />}
      <>
        <Wrapper>
          {!withoutElements && (
            <>
              <TopBar />
              <NewsSection />
            </>
          )}
          {children}
        </Wrapper>
      </>
    </ThemeProvider>
  );
};

export default MainTemplate;
