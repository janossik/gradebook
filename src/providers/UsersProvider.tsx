import axios from "axios";
import { createContext, FC, useEffect, useState } from "react";
import { ITeacher } from "types/types";

export const UsersContext = createContext<[ITeacher | null, (users: ITeacher) => void]>([null, () => {}]);

const UsersProvider: FC = ({ children }) => {
  const [authorizedUser, setAuthorizedUser] = useState<ITeacher | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("token");
        axios
          .get("/me", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setAuthorizedUser(response.data);
          });
      } catch (e) {
        console.error(e);
      }
    })();
    return () => {};
  }, []);

  const handlerUser = (user: ITeacher) => {
    setAuthorizedUser(user);
  };

  return <UsersContext.Provider value={[authorizedUser, handlerUser]}>{children}</UsersContext.Provider>;
};

export default UsersProvider;
