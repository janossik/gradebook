import axios from "axios";
import Header from "components/molecules/Header/Header";
import UsersList from "components/organisms/UsersList/UsersList";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { IUser } from "types/types";

const StyledNavLink = styled(NavLink)<{ active?: number }>`
  display: inline-flex;
  min-height: 50px;
  min-width: 50px;
  margin: 0 5px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 30%;
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.background};
      :hover {
        background-color: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.background};
      }
    `}
`;

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [groups, setGroups] = useState<string[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios.get(`/groups`).then(({ data: { groups } }) => {
      setGroups(groups);
    });
  }, []);

  useEffect(() => {
    axios.get(`/students/${id || groups[0]}`).then(({ data: { students } }: { data: { students: IUser[] } }) => {
      setUsers(students);
    });
  }, [id, groups]);

  return (
    <div>
      <Header
        title="Group"
        category={
          <>
            {groups.map((group) => (
              <StyledNavLink key={group} active={group === id ? 1 : 0} to={`/dashboard/${group}`}>
                {group}
              </StyledNavLink>
            ))}
          </>
        }
      />
      <UsersList users={users} />
    </div>
  );
};

export default Dashboard;
