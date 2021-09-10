import MenuLink from "components/atoms/MenuLink/MenuLink";
import { useAuth } from "hooks/useAuth";
import pages from "utils/pages";
import { Wrapper } from "./Menu.styles";

const Menu = () => {
  const { singOut } = useAuth();
  return (
    <Wrapper>
      {pages.map(({ path, name, menuPath }) => (
        <MenuLink key={name} to={menuPath ? menuPath : path}>
          {name}
        </MenuLink>
      ))}
      <MenuLink to={"/"} onClick={singOut}>
        log out
      </MenuLink>
    </Wrapper>
  );
};

export default Menu;
