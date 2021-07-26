import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { UsersContext } from "providers/UsersProvider";
import { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  display: grid;
  gap: 10px;
`;

const UserList = () => {
  const [users] = useContext(UsersContext);
  return (
    <>
      {users.length ? (
        <Wrapper>
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
