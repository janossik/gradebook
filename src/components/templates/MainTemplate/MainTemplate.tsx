import Navigation from "components/organisms/Navigation/Navigation";
import NewsSection from "components/organisms/NewsSection/NewsSection";
import TopBar from "components/organisms/TopBar/TopBar";
import { Wrapper } from "./MainTemplate.styles";

const MainTemplate = ({ children, withoutElements }: { children: JSX.Element; withoutElements?: boolean }) => {
  return (
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
  );
};

export default MainTemplate;
