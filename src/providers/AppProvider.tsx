import { AuthProvider } from "hooks/useAuth";
import { BrowserRouter } from "react-router-dom";
import StyledProvider from "providers/StyledProvider";
import { ErrorProvider } from "hooks/useError";

const AppProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <ErrorProvider>
      <BrowserRouter>
        <StyledProvider>
          <AuthProvider>{children}</AuthProvider>
        </StyledProvider>
      </BrowserRouter>
    </ErrorProvider>
  );
};

export default AppProvider;
