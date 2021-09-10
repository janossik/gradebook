import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Button from "components/atoms/Button/Button";
import Title from "components/atoms/Title/Title";
import UsersList from "components/organisms/UsersList/UsersList";
import useStudents from "hooks/useStudents";
import { MenuGroup } from "components/organisms/MenuGroup/MenuGroup";

const Dashboard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [groups, setGroups] = useState<string[]>([]);
  const { getGroups } = useStudents();
  const [activeMenuGroup, setActiveMenuGroup] = useState(false);

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      if (groups) {
        setGroups(groups);
      }
    })();
  }, [getGroups]);

  if (!id && groups.length > 0) {
    return <Redirect to={`/dashboard/${groups[0]}`} />;
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
      <MenuGroup active={activeMenuGroup} setActive={setActiveMenuGroup} id={id} groups={groups} />
    </>
  );
};

export default Dashboard;
