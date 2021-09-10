import axios from "axios";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { ITeacher } from "types/types";

export const AuthContext = createContext<{
  authUser: ITeacher | null;
  signIn: ({ login, password }: { login: string; password: string }) => Promise<void>;
  singOut: () => Promise<void>;
}>({ authUser: null, signIn: async () => {}, singOut: async () => {} });

export const AuthProvider: FC = ({ children }) => {
  const [authUser, setAuthUser] = useState<ITeacher | null>(null);

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
        console.error(e);
      }
    })();
  }, []);

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
      console.error(e);
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
