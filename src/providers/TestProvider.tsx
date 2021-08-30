import MainTemplate from "components/templates/MainTemplate/MainTemplate";

const TestProvider = ({ children }: { children: JSX.Element }) => {
  return <MainTemplate withoutElements>{children}</MainTemplate>;
};

export default TestProvider;
