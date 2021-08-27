import MainTemplate from "components/templates/MainTemplate";

const TestProvider = ({ children }: { children: JSX.Element }) => {
  return <MainTemplate widthOutNav>{children}</MainTemplate>;
};

export default TestProvider;
