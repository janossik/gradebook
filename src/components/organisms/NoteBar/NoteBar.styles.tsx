import styled from "styled-components";

export const Wrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 70px;
  right: 0%;
  max-width: 300px;
  height: 500px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.background};
  border: 2px solid ${({ theme }) => theme.color.secondary};
  transform: translateX(${({ visible }) => (visible ? "0%" : "100%")});
  transition: 400ms;
  z-index: 10;

  div {
    height: 100%;
    padding-right: 10px;
    overflow-y: auto;
  }
`;

export const Tag = styled.button`
  position: absolute;
  top: 40px;
  left: -40px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.color.background};
  transform: rotate(270deg);
  border: none;
  background-color: ${({ theme }) => theme.color.secondary};
`;
