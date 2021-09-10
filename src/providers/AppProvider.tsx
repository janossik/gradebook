import { AuthProvider } from "hooks/useAuth";
import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import StyledProvider from "providers/StyledProvider";

const AppProvider: FC = ({ children }) => {
  return (
    <BrowserRouter>
      <StyledProvider>
        <AuthProvider>{children}</AuthProvider>
      </StyledProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
