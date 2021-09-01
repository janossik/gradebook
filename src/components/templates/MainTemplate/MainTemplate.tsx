import { ThemeProvider } from "styled-components";
import { theme } from "theme/theme";
import GlobalStyle from "theme/GlobalStyle";
import SearchBar from "components/molecules/SearchBar/SearchBar";
import Navigation from "components/organisms/Navigation/Navigation";
import NewsSection from "components/organisms/NewsSection/NewsSection";
import { Wrapper } from "./MainTemplate.styles";

const MainTemplate = ({ children, withoutElements }: { children: JSX.Element; withoutElements?: boolean }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!withoutElements && <Navigation />}
      <>
        <Wrapper>
          {!withoutElements && (
            <>
              <SearchBar />
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
