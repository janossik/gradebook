import Hamburger from "components/atoms/Hamburger/Hamburger";
import Title from "components/atoms/Title/Title";
import Menu from "components/molecules/Menu/Menu";
import useHandleNavigation from "hooks/useHandleNavigation";
import styled from "styled-components";

const Wrapper = styled.nav<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  padding: 50px 0 0 0;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  transform: translateX(${({ active }) => (active ? "0%" : "-100%")});
  transition: 1000ms;
  z-index: 10;
`;

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
