import styled from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  gap: 10px;
  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    grid-row: 2/3;
    grid-column: 1/2;
  }
  /*   @media screen and (min-width: ${({ theme }) => theme.screen.tablet}) {
    height: calc(100vh - 130px);
    width: 90%;
    overflow: auto;
  } */
`;
