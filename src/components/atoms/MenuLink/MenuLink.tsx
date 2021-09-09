import { MouseEventHandler } from "react";
import { Wrapper, BodyLink } from "./MenuLink.styles";

const MenuLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <Wrapper onClick={onClick}>
      <BodyLink to={to}>{children}</BodyLink>
    </Wrapper>
  );
};

export default MenuLink;
