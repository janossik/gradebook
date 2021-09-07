import styled from "styled-components";

//calc(clamp(300px, 100%, 30%) + 20px)
export const Wrapper = styled.main`
  display: grid;
  min-height: 90vh;
  padding: 20px 10px;
  grid-template-rows: 90px 1fr;
  grid-template-columns: 1fr 0.75fr;

  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 90px;
    gap: 20px;
  }
`;
