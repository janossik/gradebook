import CloseButton from "components/atoms/CloseButton/CloseButton";
import Score from "components/atoms/Score/Score";
import { UsersContext } from "providers/UsersProvider";
import { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  min-height: 80px;
  min-width: 300px;
  grid-template-columns: 20% 80%;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  div:first-child {
    display: flex;
    gap: 30px;
  }
  div:last-child {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

const NameUser = styled.h4`
  font-size: ${({ theme }) => theme.font.size.s};
  margin: 0;
`;

type PropsUserListItem = {
  id: string;
  score: number;
  name: string;
  attendance: number;
};

const UsersListItem = ({ id, score, name, attendance }: PropsUserListItem) => {
  const [users, setUsers] = useContext(UsersContext);
  const removeUser = () => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  return (
    <Wrapper>
      <div>
        <Score score={score} />
      </div>
      <Content>
        <div>
          <NameUser>{name}</NameUser>
          <div>
            <CloseButton onClick={removeUser} />
          </div>
        </div>
        <div>attendance: {attendance * 100}%</div>
      </Content>
    </Wrapper>
  );
};

export default UsersListItem;
