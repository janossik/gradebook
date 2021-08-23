import styled from "styled-components";

//calc(clamp(300px, 100%, 30%) + 20px)
export const Wrapper = styled.main`
  display: flex;
  padding: 20px 20px 20px 20px;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    padding: 40px 10px 0;
  }
`;
