import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  min-height: 90px;
  width: 100%;
  padding: 0 40px;
  grid-template-columns: 1fr 4fr;
  grid-row: 1/2;
  grid-column: 1/2;
  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    padding: 40px 10px 0;
    grid-template-columns: 1.8fr 4.5fr;
    gap: 10px;
    font-size: 14px;
  }
`;
