import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 5px 10px;
  margin: 3px 0 10px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 30px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.background};
  border: 2px solid ${({ theme }) => theme.color.background};
  border-radius: 30px;
`;
