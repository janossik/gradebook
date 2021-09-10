import styled from "styled-components";

const Button = styled.button<{ backgroundColor?: string; color?: string }>`
  display: block;
  min-height: 32px;
  width: clamp(60px, 100%, 120px);
  color: ${({ theme, color }) => (color ? color : theme.color.text)};
  background-color: ${({ theme, backgroundColor }) => (backgroundColor ? backgroundColor : `rgb(220,230,240)`)};
  border: none;
  border-radius: 100px;
  transition: 300ms;
  ::first-letter {
    text-transform: capitalize;
  }
  :hover {
    color: ${({ theme }) => theme.color.background};
    background-color: ${({ theme }) => theme.color.secondary};
  }
`;

export default Button;
