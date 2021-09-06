import { render } from "@testing-library/react";
import TestProvider from "providers/TestProvider";

const AllTheProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <TestProvider>{children}</TestProvider>
    </>
  );
};

const customRender = (ui?: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
