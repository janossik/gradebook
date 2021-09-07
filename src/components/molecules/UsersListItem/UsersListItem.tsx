import CloseButton from "components/atoms/CloseButton/CloseButton";
import Score from "components/atoms/Score/Score";
import Title from "components/atoms/Title/Title";
import { UsersContext } from "providers/UsersProvider";
import { useContext } from "react";
import { PropsUserListItem } from "types/types";
import { Wrapper, Content, WrapperButton } from "./UserListItem.styles";

const UsersListItem = ({ id, name, attendance, average }: PropsUserListItem) => {
  const [users, setUsers] = useContext(UsersContext);
  const removeUser = () => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  return (
    <Wrapper data-testid="user">
      <div>
        <Score score={average} />
      </div>
      <Content>
        <div>
          <Title color="text" fontSize="s">
            {name}
          </Title>
          <div>attendance: {attendance}</div>
        </div>
        <WrapperButton>
          <CloseButton onClick={removeUser} />
        </WrapperButton>
      </Content>
    </Wrapper>
  );
};

export default UsersListItem;
