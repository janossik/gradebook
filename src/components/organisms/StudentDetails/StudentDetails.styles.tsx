import styled from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  gap: 20px;
`;

export const HeaderStudentDetails = styled.header`
  display: grid;
  padding-top: 20px;
  gap: 20px;
  section:nth-child(1) {
    display: flex;
    gap: 10px;
  }
  section:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const WrapperGrades = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
