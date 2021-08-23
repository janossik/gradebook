import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  min-height: 80px;
  min-width: 300px;
  grid-template-columns: 20% 80%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  div:first-child {
    display: flex;
    gap: 30px;
  }
  div:last-child {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

export const NameUser = styled.h4`
  font-size: ${({ theme }) => theme.font.size.s};
  margin: 0;
`;
