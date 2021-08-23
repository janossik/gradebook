import Hamburger from "components/atoms/Hamburger/Hamburger";
import Title from "components/atoms/Title/Title";
import Menu from "components/molecules/Menu/Menu";
import useHandleNavigation from "hooks/useHandleNavigation";
import { Wrapper } from "./Navigation.styles";

const Navigation = () => {
  const { active, refNavigation, inverseNavigation } = useHandleNavigation();
  return (
    <>
      <Hamburger active={active} onClick={inverseNavigation} />
      <Wrapper active={active} ref={refNavigation}>
        <Title>GradeBook</Title>
        <Menu />
      </Wrapper>
    </>
  );
};

export default Navigation;
