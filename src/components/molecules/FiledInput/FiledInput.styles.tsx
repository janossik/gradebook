import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 5px 10px;
  margin: 3px 0 10px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 30px;
  max-width: 300px;
`;
