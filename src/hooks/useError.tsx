import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { IAlert } from "types/types";

export const ErrorContext = createContext<[IAlert | null, (alert: IAlert | null) => void]>([
  {} as IAlert,
  (alert) => {},
]);

export const ErrorProvider = ({ children }: { children: JSX.Element }) => {
  const [error, setError] = useState<IAlert | null>(null);

  const dispatchError = useCallback((alert: IAlert | null) => {
    setError(alert);
  }, []);

  useEffect(() => {
    const clearError = setTimeout(() => {
      dispatchError(null);
    }, 7000);
    return () => {
      clearTimeout(clearError);
    };
  }, [error, dispatchError]);

  return <ErrorContext.Provider value={[error, dispatchError]}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const error = useContext(ErrorContext);
  if (!error) {
    throw Error("useError needs to be inside inside ErrorContext");
  }
  return error;
};
