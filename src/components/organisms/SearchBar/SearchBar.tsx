import axios from "axios";
import { useCombobox } from "downshift";
import { useState } from "react";
import { IUser } from "types/types";
import { debounce } from "utils/utils";
import { Wrapper, SearchInput, ListUsersSearched, ListUsersSearchedItem } from "./SearchBar.styles";

const SearchBar = () => {
  const [students, setStudents] = useState<IUser[]>([]);

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
          students.map((item, index) => (
            <ListUsersSearchedItem
              key={item.name}
              idHighlightedIndex={highlightedIndex === index}
              {...getItemProps({ item, index })}
            >
              {item.name}
            </ListUsersSearchedItem>
          ))}
      </ListUsersSearched>
    </Wrapper>
  );
};

export default SearchBar;
