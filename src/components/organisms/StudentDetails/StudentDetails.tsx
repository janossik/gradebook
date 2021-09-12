import Score from "components/atoms/Score/Score";
import Title from "components/atoms/Title/Title";
import { useState, useEffect } from "react";
import { PropsUserListItem } from "types/types";
import { getAverage, getAverages } from "utils/utils";
import { ListGrades } from "components/molecules/ListGrades/ListGrades";
import { HeaderStudentDetails, Wrapper, WrapperGrades } from "./StudentDetails.styles";

const StudentDetails = ({ index, name, group, course, attendance, grades, showAll }: PropsUserListItem) => {
  const [showAllGrades, setShowAllGrades] = useState(showAll || false);
  const [sortedGrades, setSortedGrades] = useState<{ id: string; subject: string; average: number }[]>([]);

  useEffect(() => {
    (async () => {
      setSortedGrades(getAverages(grades));
    })();
  }, [grades]);

  return (
    <Wrapper>
      <HeaderStudentDetails>
        <section>
          <Score score={`${getAverage(grades)}`} />
          <Title color="text" fontSize="l" as="p" capitalize>
            {name}
          </Title>
        </section>
        <section>
          <div>Identifier: {index}</div>
          <div>Group: {group}</div>
          <div>Attendance: {attendance}</div>
        </section>
      </HeaderStudentDetails>
      <section>
        <div>
          <Title color="text" fontSize="s" as="p">
            Course:
          </Title>
          <Title color="text" fontSize="m" fontWeight="light" capitalize>
            {course}
          </Title>
        </div>
        <WrapperGrades>
          <ListGrades title="Average grades:" grades={sortedGrades} />
          <ListGrades
            title="All grades:"
            grades={grades}
            isShow={showAllGrades}
            handleShow={() => setShowAllGrades(!showAllGrades)}
          />
        </WrapperGrades>
      </section>
    </Wrapper>
  );
};

export default StudentDetails;
