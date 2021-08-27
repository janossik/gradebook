import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.background};
  border: 2px solid ${({ theme }) => theme.color.background};
  border-radius: 30px;
`;
