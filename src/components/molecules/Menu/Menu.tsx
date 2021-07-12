import styled from "styled-components";
import MenuLink from "components/atoms/MenuLink/MenuLink";
import viewStorage from "utils/viewStorage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80%;
`;

const Menu = () => {
  return (
    <Wrapper>
      {viewStorage.map(({ path, name }) => (
        <MenuLink key={name} to={path}>
          {name}
        </MenuLink>
      ))}
    </Wrapper>
  );
};

export default Menu;
