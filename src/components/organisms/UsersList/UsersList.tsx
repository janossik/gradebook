import UsersListItem from "components/organisms/UsersListItem/UsersListItem";
import useStudents from "hooks/useStudents";
import { useState, useEffect } from "react";
import { IUser } from "types/types";
import { Wrapper } from "./UsersList.styles";

const UserList = ({ id, users }: { id: string; users?: IUser[] }) => {
  const { getStudentsByGroup } = useStudents();
  const [students, setStudents] = useState<IUser[]>(users || []);

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      if (students) {
        setStudents(students);
      } else {
        if (users) {
          setStudents(users.filter((item) => item.group === id));
        }
      }
    })();
  }, [id, getStudentsByGroup, users]);

  return (
    <>
      {students.length ? (
        <Wrapper>
          {students.map((item) => (
            <UsersListItem key={item.id} {...item} />
          ))}
        </Wrapper>
      ) : (
        <div style={{ paddingTop: "30px" }}>
          <h3>The students aren't here from group {id} </h3>
        </div>
      )}
    </>
  );
};

export default UserList;
