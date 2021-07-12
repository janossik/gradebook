import { Wrapper, BodyLink } from "./MenuLink.styles";

const MenuLink = ({ to, children }: { to: string; children: string }) => {
  return (
    <Wrapper>
      <BodyLink to={to}>{children}</BodyLink>
    </Wrapper>
  );
};

export default MenuLink;
