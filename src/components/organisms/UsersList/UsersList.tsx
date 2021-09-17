import UsersListItem from "components/organisms/UsersListItem/UsersListItem";
import { useError } from "hooks/useError";
import { useGetStudentsQuery } from "store/api/students";
import { IUser } from "types/types";
import { Wrapper } from "./UsersList.styles";

const UserList = ({ id, users }: { id: string; users?: IUser[] }) => {
  const [, dispatchError] = useError();

  const { data, isLoading, isError } = useGetStudentsQuery<{
    data: { students: IUser[] };
    isLoading: boolean;
    isError: boolean;
  }>({ id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || isError) {
    dispatchError({ message: "You can't get users from the group" });
    return <div>You can't get students</div>;
  }

  return (
    <>
      {data.students.length ? (
        <Wrapper>
          {data.students.map((item) => (
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
