import Title from "components/atoms/Title/Title";
import Modal from "components/molecules/Modal/Modal";
import { IMenuGroup } from "types/types";
import { StyledNavLink } from "./MenuGroup.styles";

export const MenuGroup = ({ id, groups, active, setActive }: IMenuGroup) => {
  return (
    <Modal
      active={active}
      closeAction={() => {
        setActive(false);
      }}
      maxWidth="300px"
      maxHeight="300px"
    >
      <article>
        <header style={{ paddingBottom: "10px" }}>
          <Title color="text">Select group</Title>
        </header>
        <section>
          {groups.map((group) => (
            <StyledNavLink
              key={group}
              onClick={() => {
                setActive(false);
              }}
              active={group === id ? 1 : 0}
              to={`/dashboard/${group}`}
            >
              {group}
            </StyledNavLink>
          ))}
        </section>
      </article>
    </Modal>
  );
};
