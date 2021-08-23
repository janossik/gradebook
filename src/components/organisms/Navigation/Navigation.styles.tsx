import styled from "styled-components";

export const Wrapper = styled.nav<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  padding: 50px 0 0 0;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  transform: translateX(${({ active }) => (active ? "0%" : "-100%")});
  transition: 1000ms;
  z-index: 10;
`;
