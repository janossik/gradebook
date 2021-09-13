import { render } from "@testing-library/react";
import AppProvider from "providers/AppProvider";

const AllTheProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <AppProvider>{children}</AppProvider>
    </>
  );
};

const customRender = (ui?: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
