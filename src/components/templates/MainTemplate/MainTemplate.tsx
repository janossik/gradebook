import Navigation from "components/organisms/Navigation/Navigation";
import NewsSection from "components/organisms/NewsSection/NewsSection";
import TopBar from "components/organisms/TopBar/TopBar";
import StyledProvider from "providers/StyledProvider";
import { Wrapper } from "./MainTemplate.styles";

const MainTemplate = ({ children, withoutElements }: { children: JSX.Element; withoutElements?: boolean }) => {
  return (
    <StyledProvider>
      <>
        {!withoutElements && <Navigation />}
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
    </StyledProvider>
  );
};

export default MainTemplate;
