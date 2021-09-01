import { createContext, FC, useState } from "react";

interface IUser {
  id: string;
  name: string;
  attendance: string;
  average: string;
  group: string;
}

const usersData = [
  {
    id: "1",
    name: "Adam Romański",
    attendance: "39%",
    average: "2.3",
    group: "A",
  },
  {
    id: "2",
    name: "Krzysztof Batko",
    attendance: "23%",
    average: "3.3",
    group: "A",
  },
  {
    id: "3",
    name: "Patrycja Gonciarz",
    attendance: "45%",
    average: "4.3",
    group: "A",
  },
];

export const UsersContext = createContext<[IUser[], (users: IUser[]) => void]>([[], () => {}]);

const UsersProvider: FC = ({ children }) => {
  const [users, setUsers] = useState<IUser[]>(usersData);

  const handlerUsers = (users: IUser[]) => {
    setUsers(users);
  };

  return <UsersContext.Provider value={[users, handlerUsers]}>{children}</UsersContext.Provider>;
};

export default UsersProvider;
