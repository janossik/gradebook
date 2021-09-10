import Title from "components/atoms/Title/Title";
import { IHeader } from "types/types";

const Header = ({ title, category, children }: IHeader) => (
  <header>
    <Title as="h2">{title}</Title>
    <Title as="h3" color="text" fontSize="s" fontWeight="medium">
      {category}
    </Title>
    {children}
  </header>
);

export default Header;
