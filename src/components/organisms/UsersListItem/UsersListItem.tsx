import Score from "components/atoms/Score/Score";
import Title from "components/atoms/Title/Title";
import { PropsUserListItem } from "types/types";
import { getAverage } from "utils/utils";
import ModalDetailsUser from "../ModalStudentDetails/ModalStudentDetails";
import { Wrapper, Content } from "./UserListItem.styles";

const UsersListItem = (props: PropsUserListItem) => {
  const { name, attendance, grades } = props;
  return (
    <>
      <Wrapper data-testid="user">
        <div>
          <Score score={`${getAverage(grades)}`} />
        </div>
        <Content>
          <div>
            <Title color="text" fontSize="s" capitalize>
              {name}
            </Title>
            <Title color="text" fontSize="xs" fontWeight="regular" capitalize>
              attendance:{attendance}
            </Title>
          </div>
          <ModalDetailsUser {...props} />
        </Content>
      </Wrapper>
    </>
  );
};

export default UsersListItem;
