import Title from "components/atoms/Title/Title";
import styled, { keyframes } from "styled-components";
import { IAlert } from "types/types";

const shrinkAnimation = keyframes`
    0%{
        transform: translateX(-50%) scaleX(1);
    }
    100%{
        transform: translateX(-50%) scaleX(0);

    }
`;
const slideAnimation = keyframes`
    0%{
        transform:translateX(-50%) translateY(500%);
    }
    100%{
        transform:translateX(-50%) translateY(0%);

    }
`;

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 10%;
  padding: 40px 30px 20px;
  background-color: rgb(240, 240, 240);
  border: solid 2px ${({ theme }) => theme.color.error};
  border-radius: 15px;
  transform: translateX(-50%);
  animation: ${slideAnimation} 1s ease-in-out 1 forwards, ${slideAnimation} 1s 6s ease-in-out 1 reverse forwards;

  ::before,
  ::after {
    content: " ";
    position: absolute;
    top: 10px;
    left: 50%;
    height: 10px;
    width: 100px;
    background-color: ${({ theme }) => theme.color.error};
    border-radius: 100px;
    transform: translateX(-50%);
    opacity: 0.6;
  }
  ::before {
    z-index: 2;
  }
  ::after {
    transform: translateX(-50%) scaleX(1);
    transform-origin: left top;
    animation: ${shrinkAnimation} 5s 1s linear 1 forwards;
    z-index: 1;
  }
`;

const Alert = ({ title = "Oops!", message }: IAlert) => {
  return (
    <Wrapper>
      <Title color="error">{title}</Title>
      <Title as="p" color="error" fontSize="s" fontWeight="regular">
        {message}
      </Title>
    </Wrapper>
  );
};

export default Alert;
