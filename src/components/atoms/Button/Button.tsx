import styled from "styled-components";

const Button = styled.button`
  display: block;
  min-height: 32px;
  min-width: 110px;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  border: none;
  border-radius: 100px;
  ::first-letter {
    text-transform: capitalize;
  }
  :hover {
    color: ${({ theme }) => theme.color.background};
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;

export default Button;
