import { IMenuLink } from "types/types";
import { Wrapper, BodyLink } from "./MenuLink.styles";

const MenuLink = ({ to, children, onClick }: IMenuLink) => {
  return (
    <Wrapper onClick={onClick}>
      <BodyLink to={to}>{children}</BodyLink>
    </Wrapper>
  );
};

export default MenuLink;
