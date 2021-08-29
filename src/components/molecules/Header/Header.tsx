import Title from "components/atoms/Title/Title";

const Header = ({ title, category, children }: { title: string; category: string; children?: JSX.Element }) => (
  <header>
    <Title as="h2">{title}</Title>
    <Title as="h3" color="text" fontSize="s" fontWeight="medium">
      {category}
    </Title>
    {children}
  </header>
);

export default Header;
