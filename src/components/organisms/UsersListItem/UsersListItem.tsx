import Score from "components/atoms/Score/Score";
import Title from "components/atoms/Title/Title";
import { PropsUserListItem } from "types/types";
import ModalDetailsUser from "../ModalStudentDetails/ModalStudentDetails";
import { Wrapper, Content } from "./UserListItem.styles";

const UsersListItem = ({ id, name, attendance, grades }: PropsUserListItem) => {
  return (
    <>
      <Wrapper data-testid="user">
        <div>
          <Score
            score={`${
              grades[0]
                ? (
                    grades
                      .map((grade) => {
                        return grade.average;
                      })
                      .reduce((pv, v) => pv + v) / grades.length
                  ).toFixed(2)
                : 0
            }`}
          />
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
          <ModalDetailsUser id={id} />
        </Content>
      </Wrapper>
    </>
  );
};

export default UsersListItem;
