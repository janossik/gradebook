import Score from "components/atoms/Score/Score";
import Title from "components/atoms/Title/Title";
import { useState } from "react";
import { PropsUserListItem } from "types/types";
import Modal from "../../molecules/Modal/Modal";
import StudentDetails from "../StudentDetails/StudentDetails";
import { Wrapper, Content } from "./UserListItem.styles";

const UsersListItem = ({ id, name, attendance, average }: PropsUserListItem) => {
  const [active, setActive] = useState(false);
  return (
    <>
      {id && (
        <Modal active={active} setActive={setActive}>
          <StudentDetails id={id} />
        </Modal>
      )}
      <Wrapper
        data-testid="user"
        onClick={() => {
          setActive(true);
        }}
      >
        <div>
          <Score score={`${average}`} />
        </div>
        <Content>
          <div>
            <Title color="text" fontSize="s" capitalize>
              {name}
            </Title>
            <Title color="text" fontSize="xs" fontWeight="regular">
              {attendance}
            </Title>
          </div>
          {/*          <WrapperButton>
            <CloseButton onClick={removeUser} />
          </WrapperButton> */}
        </Content>
      </Wrapper>
    </>
  );
};

export default UsersListItem;
