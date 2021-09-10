import Button from "components/atoms/Button/Button";
import Score from "components/atoms/Score/Score";
import Title from "components/atoms/Title/Title";
import { IListGrades } from "types/types";
import { GridGrades } from "./ListGrades.styles";

export const ListGrades = ({ title, isShow, handleShow, grades }: IListGrades) => {
  return (
    <div>
      {title && (
        <Title color="text" fontSize="s" as="p">
          {title}
        </Title>
      )}
      {handleShow && <Button onClick={handleShow}>{isShow ? "Hidden" : "Show"}</Button>}
      <GridGrades>
        {(isShow || !handleShow) &&
          grades.map((garde) => {
            return (
              <div key={garde.id}>
                {garde.subject}:<Score score={`${garde.average}`} />
              </div>
            );
          })}
      </GridGrades>
    </div>
  );
};
