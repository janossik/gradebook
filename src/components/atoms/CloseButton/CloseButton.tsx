import styled from "styled-components";

const CloseButton = styled.button<{ backgroundColor?: string; color?: string }>`
  position: relative;
  height: 30px;
  min-width: 30px;
  margin-right: 10px;
  border: solid 5px ${({ theme, backgroundColor }) => (backgroundColor ? backgroundColor : theme.color.primary)};
  background-color: ${({ theme, backgroundColor }) => (backgroundColor ? backgroundColor : theme.color.primary)};
  border-radius: 100%;
  overflow: hidden;
  ::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 3px;
    width: 110%;
    background: ${({ theme, color }) => (color ? color : theme.color.background)};
    transform: translate(-50%, -50%) rotate(45deg);
    transition: 300ms;
  }
  ::before {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 3px;
    width: 110%;
    background: ${({ theme, color }) => (color ? color : theme.color.background)};
    transform: translate(-50%, -50%) rotate(-45deg);
    transition: 300ms;
  }
  &:hover {
    transform: scale(1.1) rotate(90deg);
    transition: 300ms;
  }
`;

export default CloseButton;
