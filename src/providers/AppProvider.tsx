import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AuthProvider } from "hooks/useAuth";
import StyledProvider from "providers/StyledProvider";
import { ErrorProvider } from "hooks/useError";
import { store } from "store/store";

const AppProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorProvider>
          <StyledProvider>
            <AuthProvider>{children}</AuthProvider>
          </StyledProvider>
        </ErrorProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default AppProvider;
