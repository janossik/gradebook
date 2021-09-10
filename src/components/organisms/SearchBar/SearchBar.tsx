import axios from "axios";
import Modal from "components/molecules/Modal/Modal";
import { useCombobox } from "downshift";
import { useEffect, useState } from "react";
import { IUser } from "types/types";
import { debounce } from "utils/utils";
import StudentDetails from "../StudentDetails/StudentDetails";
import { Wrapper, SearchInput, ListUsersSearched, ListUsersSearchedItem } from "./SearchBar.styles";

const ModalDetailsUser = ({
  id,
  currentId,
  clearCurrentId,
}: {
  id: string;
  currentId: string;
  clearCurrentId: () => void;
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (id === currentId) {
      setActive(true);
    }
    return () => {
      setActive(false);
      setTimeout(() => {
        clearCurrentId();
      }, 10000);
    };
  }, [id, currentId, clearCurrentId]);

  return (
    <>
      {id && (
        <Modal active={active} setActive={setActive}>
          <StudentDetails id={id} />
        </Modal>
      )}
    </>
  );
};

const SearchBar = () => {
  const [students, setStudents] = useState<IUser[]>([]);
  const [id, setId] = useState("");

  const clearId = () => {
    setId("");
  };
  const getFindStudents = debounce(async ({ inputValue }) => {
    const { data } = await axios.post(`/search`, { name: inputValue });
    setStudents(data.students);
  }, 100);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, getItemProps, highlightedIndex } = useCombobox({
    items: students,
    onInputValueChange: getFindStudents,
  });

  const isVisible = !isOpen || students.length <= 0;

  return (
    <Wrapper {...getComboboxProps()}>
      <SearchInput placeholder="You can search for users here" {...getInputProps()} />
      <ListUsersSearched isVisible={isVisible} {...getMenuProps()}>
        {isOpen &&
          students.map((item, index) => {
            return (
              <ListUsersSearchedItem
                key={item.name}
                idHighlightedIndex={highlightedIndex === index}
                {...getItemProps({ item, index })}
                onClick={() => {
                  setId(item.id);
                }}
              >
                <ModalDetailsUser id={item.id} currentId={id} clearCurrentId={clearId} />
                {item.name}
              </ListUsersSearchedItem>
            );
          })}
      </ListUsersSearched>
    </Wrapper>
  );
};

export default SearchBar;
