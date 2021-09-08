import Score from "components/atoms/Score/Score";
import Title from "components/atoms/Title/Title";
import useStudents from "hooks/useStudents";
import { useEffect, useState } from "react";
import { IUser, PropsUserListItem } from "types/types";
import Modal from "../../molecules/Modal/Modal";
import { Wrapper, Content } from "./UserListItem.styles";

const StudentDetails = ({ id }: { id: string }) => {
  const { getStudentById } = useStudents();
  const [currentStudent, setCurrentStudent] = useState<IUser>();

  useEffect(() => {
    (async () => {
      const student = await getStudentById(id);
      if (student) {
        setCurrentStudent(student);
      }
    })();
  }, [id, getStudentById]);

  if (!currentStudent) {
    return <></>;
  }

  return (
    <article>
      <header>
        <div>
          <Score score={currentStudent.average} />
          <Title color="text" fontSize="l">
            {currentStudent.name}
          </Title>
        </div>
        <div>Identifier: {currentStudent.id}</div>
        <div>Group: {currentStudent.group}</div>
        <div>Attendance: {currentStudent.attendance}</div>
      </header>
      <section></section>
    </article>
  );
};

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
          <Score score={average} />
        </div>
        <Content>
          <div>
            <Title color="text" fontSize="s">
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
