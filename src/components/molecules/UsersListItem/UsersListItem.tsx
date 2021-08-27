import CloseButton from "components/atoms/CloseButton/CloseButton";
import Score from "components/atoms/Score/Score";
import { UsersContext } from "providers/UsersProvider";
import { useContext } from "react";
import { PropsUserListItem } from "types/types";
import { Wrapper, Content, NameUser } from "./UserListItem.styles";

const UsersListItem = ({ id, score, name, attendance }: PropsUserListItem) => {
  const [users, setUsers] = useContext(UsersContext);
  const removeUser = () => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  return (
    <Wrapper data-testid="user">
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
