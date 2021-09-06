import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import useStudents from "hooks/useStudents";
import { useState, useEffect } from "react";
import { IUser } from "types/types";
import { Wrapper } from "./UsersList.styles";

const UserList = ({ id }: { id: string }) => {
  const { getStudents } = useStudents();
  const [students, setStudents] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      if (students) {
        setStudents(students);
      }
    })();
  }, [id, getStudents]);

  return (
    <>
      {students.length ? (
        <Wrapper>
          {students.map((props) => (
            <UsersListItem key={props.id} {...props} />
          ))}
        </Wrapper>
      ) : (
        <div style={{ paddingTop: "30px" }}>
          <h3>Twoi znajomi czekają, żebyś ich dodał!</h3>
        </div>
      )}
    </>
  );
};

export default UserList;
