import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    ::first-letter {
      text-transform: capitalize;
    }
  }
`;
