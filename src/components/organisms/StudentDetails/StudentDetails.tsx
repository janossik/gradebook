import Score from "components/atoms/Score/Score";
import Title from "components/atoms/Title/Title";
import useStudents from "hooks/useStudents";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { IUser } from "types/types";

const Wrapper = styled.article`
  display: grid;
  gap: 20px;
`;
const HeaderStudentDetails = styled.header`
  display: grid;
  padding-top: 20px;
  gap: 20px;
  section:nth-child(1) {
    display: flex;
    gap: 10px;
  }
  section:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

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
    <Wrapper>
      <HeaderStudentDetails>
        <section>
          <Score score={`${currentStudent.average}`} />
          <Title color="text" fontSize="m" as="p">
            {currentStudent.name}
          </Title>
        </section>
        <section>
          <div>Identifier: {currentStudent.index}</div>
          <div>Group: {currentStudent.group}</div>
          <div>Attendance: {currentStudent.attendance}</div>
        </section>
      </HeaderStudentDetails>
      <section>
        <div>
          <Title color="text" fontSize="s" as="p">
            Course:
          </Title>
          <Title color="text" fontSize="m" fontWeight="light">
            {currentStudent.course}
          </Title>
        </div>
        <div>
          <Title color="text" fontSize="s" as="p">
            Recent grades:
          </Title>
          <div>
            {currentStudent.grades.map((garde) => {
              return (
                <div
                  key={garde.id}
                  style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}
                >
                  {garde.subject}:<Score score={`${garde.average}`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default StudentDetails;
