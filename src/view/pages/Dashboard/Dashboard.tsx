import Header from "components/molecules/Header/Header";
import UsersList from "components/organisms/UsersList/UsersList";
import useStudents from "hooks/useStudents";
import { useEffect, useState } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import styled, { css } from "styled-components";

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
  transition: 300ms;
  :hover {
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.background};
  }
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
  const { id } = useParams<{ id: string }>();
  const [groups, setGroups] = useState<string[]>([]);
  const { getGroups } = useStudents();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      if (groups) {
        setGroups(groups);
      }
    })();
  }, [getGroups]);

  if (!id && groups.length > 0) {
    return <Redirect to={`/dashboard/${groups[0]}`} />;
  }

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
      <UsersList id={id} />
    </div>
  );
};

export default Dashboard;
