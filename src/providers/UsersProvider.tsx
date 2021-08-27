import { createContext, FC, useState } from "react";

interface IUser {
  id: string;
  score: number;
  firstName: string;
  lastName: string;
  name: string;
  attendance: number;
}

const usersData = [
  {
    id: "0",
    score: 3.5,
    firstName: "Marcin",
    lastName: "Czaniecki",
    name: "Marcin Czaniecki",
    attendance: 0.38,
  },
  {
    id: "1",
    score: 1.5,
    firstName: "Marcin",
    lastName: "Czaniecki",
    name: "John Smite",
    attendance: 0.84,
  },
  {
    id: "2",
    score: 5.5,
    firstName: "Marcin",
    lastName: "Czaniecki",
    name: "Joe Beer",
    attendance: 0.63,
  },
  {
    id: "3",
    score: 4.5,
    firstName: "Marcin",
    lastName: "Czaniecki",
    name: "Cristina Moravia",
    attendance: 0.78,
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
