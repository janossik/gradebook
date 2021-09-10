import styled from "styled-components";

export const GridGrades = styled.div`
  display: grid;
  margin: 10px auto 0;
  grid-template-columns: repeat(3, 1fr);
  div {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
