import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { IUser } from "types/types";
import { Wrapper, SearchInput } from "./SearchBar.styles";

const WrapperSearchInput = styled.div`
  width: 100%;
  justify-self: left;
`;

const ListUsersSearched = styled.div`
  position: relative;
  max-height: 400px;
  padding: 20px;
  background: ${({ theme }) => theme.color.background};
  box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.3);
  overflow: auto;
  z-index: 20;
`;
const ListUsersSearchedItem = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  background: ${({ theme }) => theme.color.background};
  border-bottom: solid ${({ theme }) => theme.color.primary} 2px;
  justify-content: center;
  align-items: center;
  :hover {
    border-bottom: solid ${({ theme }) => theme.color.secondary} 2px;
  }
  cursor: default;
`;

const SearchBar = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [valueInput, setValueInput] = useState<string>("");
  const handleInput = () => {
    axios.post(`/search`, { name: valueInput }).then(({ data: { students } }) => {
      setUsers(students);
    });
  };
  return (
    <Wrapper>
      <div>
        <div>logged as:</div>
        <div>Teacher</div>
      </div>
      <WrapperSearchInput>
        <SearchInput
          placeholder="You can search for users here"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          onKeyUp={() => {
            handleInput();
          }}
        />
        {users.length ? (
          <ListUsersSearched>
            {users.map(({ name }) => (
              <ListUsersSearchedItem>{name}</ListUsersSearchedItem>
            ))}
          </ListUsersSearched>
        ) : (
          ""
        )}
      </WrapperSearchInput>
    </Wrapper>
  );
};

export default SearchBar;
