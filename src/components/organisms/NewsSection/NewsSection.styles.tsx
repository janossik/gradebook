import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 90px;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  grid-row: 1/3;
  grid-column: 2/3;
  height: 95vh;
  overflow: scroll;
  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    height: 100%;
    padding-right: 0px;
    grid-row: 3/4;
    grid-column: 1/2;
    overflow: auto;
  }
`;
