import Score from "components/atoms/Score/Score";
import Title from "components/atoms/Title/Title";
import useStudents from "hooks/useStudents";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { IUser } from "types/types";
import { getAverage, getAverages } from "utils/utils";
import { ListGrades } from "components/molecules/ListGrades/ListGrades";

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

const StudentDetails = ({ id, showAll }: { id: string; showAll?: boolean }) => {
  const { getStudentById } = useStudents();
  const [showAllGrades, setShowAllGrades] = useState(showAll || false);
  const [currentStudent, setCurrentStudent] = useState<IUser>();
  const [grades, setGrades] = useState<{ id: string; subject: string; average: number }[]>([]);

  useEffect(() => {
    (async () => {
      const student = await getStudentById(id);
      if (student) {
        setCurrentStudent(student);

        setGrades(getAverages(student.grades));
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
          <Score score={`${getAverage(grades)}`} />
          <Title color="text" fontSize="l" as="p" capitalize>
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
          <Title color="text" fontSize="m" fontWeight="light" capitalize>
            {currentStudent.course}
          </Title>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <ListGrades title="Average grades:" grades={grades} />
          <ListGrades
            title="All grades:"
            grades={currentStudent.grades}
            isShow={showAllGrades}
            handleShow={() => setShowAllGrades(!showAllGrades)}
          />
        </div>
      </section>
    </Wrapper>
  );
};

export default StudentDetails;
