import Hamburger from "components/atoms/Hamburger/Hamburger";
import Title from "components/atoms/Title/Title";
import Menu from "components/molecules/Menu/Menu";
import useHandleModal from "hooks/useHandleModal";
import { Wrapper } from "./Navigation.styles";

const Navigation = () => {
  const { visible, ref, close, inverse } = useHandleModal();
  return (
    <>
      <Hamburger active={visible} onClick={inverse} />
      <Wrapper active={visible} ref={ref}>
        <Title color="background">GradeBook</Title>
        <Menu close={close} />
      </Wrapper>
    </>
  );
};

export default Navigation;
