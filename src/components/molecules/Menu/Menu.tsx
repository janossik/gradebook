import MenuLink from "components/atoms/MenuLink/MenuLink";
import pages from "utils/pages";
import { Wrapper } from "./Menu.styles";

const Menu = () => {
  return (
    <Wrapper>
      {pages.map(({ path, name }) => (
        <MenuLink key={name} to={path}>
          {name}
        </MenuLink>
      ))}
    </Wrapper>
  );
};

export default Menu;
