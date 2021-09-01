import MenuLink from "components/atoms/MenuLink/MenuLink";
import pages from "utils/pages";
import { Wrapper } from "./Menu.styles";

const Menu = () => {
  return (
    <Wrapper>
      {pages.map(({ path, name, menuPath }) => (
        <MenuLink key={name} to={menuPath ? menuPath : path}>
          {name}
        </MenuLink>
      ))}
    </Wrapper>
  );
};

export default Menu;
