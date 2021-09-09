import styled from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  height: calc(90vh - 110px);
  min-width: 350px;
  overflow-y: auto;
  overflow-x: visible;
  gap: 10px;
  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;
