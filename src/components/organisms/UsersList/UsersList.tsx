import axios from "axios";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IUser } from "types/types";
import { Wrapper } from "./UsersList.styles";

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [groups, setGroups] = useState<string[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios.get(`/groups`).then(({ data: { groups } }) => {
      setGroups(groups);
    });
  }, []);

  useEffect(() => {
    axios.get(`/students/${id || groups[0]}`).then(({ data: { students } }: { data: { students: IUser[] } }) => {
      setUsers(students);
    });
    return () => {};
  }, [id, groups]);
  return (
    <>
      {users.length ? (
        <Wrapper>
          <div>
            {groups.map((group) => (
              <Link to={`/dashboard/${group}`} style={{ padding: "10px" }}>
                {group}
              </Link>
            ))}
          </div>
          {users.map((props) => (
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
