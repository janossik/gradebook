import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { IUser } from "types/types";
import { Wrapper } from "./UsersList.styles";

const UserList = ({ users }: { users: IUser[] }) => {
  return (
    <>
      {users.length ? (
        <Wrapper>
          {/*            */}
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
