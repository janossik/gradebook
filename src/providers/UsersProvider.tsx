import axios from "axios";
import { createContext, FC, useEffect, useState } from "react";
import { IUser } from "types/types";

export const UsersContext = createContext<[IUser[], (users: IUser[]) => void]>([[], () => {}]);

const UsersProvider: FC = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axios.get("/students").then(({ data: { students } }) => {
      setUsers(students);
    });
    return () => {};
  }, []);

  const handlerUsers = (users: IUser[]) => {
    setUsers(users);
  };

  return <UsersContext.Provider value={[users, handlerUsers]}>{children}</UsersContext.Provider>;
};

export default UsersProvider;
