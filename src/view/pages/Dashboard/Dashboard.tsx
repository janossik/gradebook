import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Button from "components/atoms/Button/Button";
import Title from "components/atoms/Title/Title";
import UsersList from "components/organisms/UsersList/UsersList";
import { MenuGroup } from "components/organisms/MenuGroup/MenuGroup";
import { useGetGroupsQuery } from "store/api/groups";

const Dashboard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetGroupsQuery<{ data?: { groups: string[] }; isLoading: boolean }>({});
  const [activeMenuGroup, setActiveMenuGroup] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) return <></>;

  if (!id && data.groups.length > 0) {
    return <Redirect to={`/dashboard/${data.groups[0]}`} />;
  }

  const handleMenuGroup = () => {
    setActiveMenuGroup(true);
  };

  return (
    <>
      <div style={{ width: "300px", margin: "0 auto" }}>
        <div style={{ paddingBottom: "10px" }}>
          <div>
            <Title>{`Group ${id}`}</Title>
          </div>
          <div>
            <Button onClick={handleMenuGroup}>Change group</Button>
          </div>
        </div>
        <UsersList id={id} />
      </div>
      <MenuGroup active={activeMenuGroup} setActive={setActiveMenuGroup} id={id} groups={data?.groups || []} />
    </>
  );
};

export default Dashboard;
