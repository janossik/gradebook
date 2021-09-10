import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  height: 80px;
  width: 100%;
  grid-template-columns: 20% 80%;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  white-space: nowrap;
  display: flex;
  justify-self: left;

  button {
    position: absolute;
    width: 70px;
    right: 10px;
  }
`;

export const WrapperButton = styled.div`
  margin-left: auto;
`;
