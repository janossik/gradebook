import styled from "styled-components";

const Textarea = styled.textarea`
  height: 400px;
  min-width: 270px;
  max-width: 300px;
  padding: 20px;
  margin: 3px 0 10px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 30px;
  outline: none;
  :focus {
    color: ${({ theme }) => theme.color.secondary};
    border-color: ${({ theme }) => theme.color.secondary};
  }
`;

export default Textarea;
