import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "components/atoms/Button/Button";
import Title from "components/atoms/Title/Title";
import Modal from "components/molecules/Modal/Modal";
import UsersList from "components/organisms/UsersList/UsersList";
import useStudents from "hooks/useStudents";

const StyledNavLink = styled(NavLink)<{ active?: number }>`
  display: flex;
  height: 50px;
  min-width: 50px;
  margin: 0 5px 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 30px;
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

const MenuGroup = ({
  id,
  groups,
  active,
  setActive,
}: {
  id: string;
  groups: string[];
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal active={active} setActive={setActive} maxWidth="300px" maxHeight="300px">
      <article>
        <header style={{ paddingBottom: "10px" }}>
          <Title color="text">Select group</Title>
        </header>
        <section>
          {groups.map((group) => (
            <StyledNavLink
              key={group}
              onClick={() => {
                setActive(false);
              }}
              active={group === id ? 1 : 0}
              to={`/dashboard/${group}`}
            >
              {group}
            </StyledNavLink>
          ))}
        </section>
      </article>
    </Modal>
  );
};

const Dashboard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [groups, setGroups] = useState<string[]>([]);
  const { getGroups } = useStudents();
  const [activeMenuGroup, setActiveMenuGroup] = useState(false);

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
    <>
      <div style={{ width: "300px", margin: "0 auto" }}>
        <div>
          <div>
            <Title>{`Group ${id}`}</Title>
          </div>
          <div>
            <Button
              onClick={() => {
                setActiveMenuGroup(true);
              }}
            >
              Change group
            </Button>
          </div>
        </div>
        <UsersList id={id} />
      </div>
      <MenuGroup active={activeMenuGroup} setActive={setActiveMenuGroup} id={id} groups={groups} />
    </>
  );
};

export default Dashboard;
