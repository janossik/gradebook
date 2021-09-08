import styled from "styled-components";

const CloseButton = styled.button<{ backgroundColor?: string; color?: string }>`
  right: 10px;
  height: 30px;
  width: 30px;
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
