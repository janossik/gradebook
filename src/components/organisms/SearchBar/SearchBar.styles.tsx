import styled from "styled-components";

export const SearchInput = styled.input`
  height: 50px;
  width: 100%;
  padding: 0 20px;
  grid-column: 2/3;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 50px;
  outline: none;
  :focus {
    border: 2px solid ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  justify-self: left;
`;

export const ListUsersSearched = styled.div<{ isVisible: boolean }>`
  position: relative;
  display: ${({ isVisible }) => (isVisible ? "none" : "block")};
  max-height: 400px;
  padding: 20px;
  background: ${({ theme }) => theme.color.background};
  box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.3);
  overflow: auto;
  z-index: 9;
`;
export const ListUsersSearchedItem = styled.div<{ idHighlightedIndex: boolean }>`
  display: flex;
  height: 50px;
  width: 100%;
  background: ${({ theme, idHighlightedIndex }) =>
    idHighlightedIndex ? theme.color.secondary : theme.color.background};
  color: ${({ theme, idHighlightedIndex }) => (idHighlightedIndex ? theme.color.background : theme.color.text)};
  border-bottom: solid ${({ theme }) => theme.color.primary} 2px;
  justify-content: center;
  align-items: center;
  cursor: default;
  :hover {
    background: ${({ theme, idHighlightedIndex }) =>
      idHighlightedIndex ? theme.color.secondary : "rgba(0, 0, 0, 0.1)"};
    border-bottom: solid ${({ theme }) => theme.color.secondary} 2px;
  }
`;
