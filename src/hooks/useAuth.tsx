import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { ITeacher } from "types/types";
import { useError } from "./useError";

export const AuthContext = createContext<{
  authUser: ITeacher | null;
  signIn: ({ login, password }: { login: string; password: string }) => Promise<void>;
  singOut: () => Promise<void>;
}>({ authUser: null, signIn: async () => {}, singOut: async () => {} });

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [authUser, setAuthUser] = useState<ITeacher | null>(null);
  const [, dispatchError] = useError();
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        const configQuery = {
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get("/me", configQuery);
        setAuthUser(data);
      } catch (e) {
        //dispatchError({ message: "Your token don't work :/" });
      }
    })();
  }, [dispatchError]);

  const signIn = async ({ login, password }: { login: string; password: string }) => {
    try {
      const configQuery = {
        login,
        password,
      };
      const { data } = await axios.post("/login", configQuery);
      setAuthUser(data);
      localStorage.setItem("token", data.token);
    } catch (e) {
      dispatchError({ message: "You give didn't correct login or password" });
    }
  };

  const singOut = async () => {
    setAuthUser(null);
    localStorage.clear();
  };

  return <AuthContext.Provider value={{ authUser, signIn, singOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw Error("UseAuth needs to be inside inside AuthContext");
  }
  return auth;
};
