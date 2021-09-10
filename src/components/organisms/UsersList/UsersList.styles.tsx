import styled from "styled-components";

export const Wrapper = styled.article`
  position: relative;
  display: grid;
  height: calc(90vh - 110px);
  min-width: 350px;

  padding-right: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 10px;
  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    min-width: 280px;
    grid-row: 2/3;
    grid-column: 1/2;
  }
`;
