import styled from "styled-components";

const Wrapper = styled.div<{ value: boolean }>`
  position: relative;
  display: flex;
  min-height: 17px;
  width: 17px;
  margin: 7px 0 7px;
  border: solid 1px black;
  border-radius: 3px;
  background-color: ${({ value, theme }) => (value ? theme.color.primary : "snow")};
  border-color: ${({ value, theme }) => (value ? theme.color.primary : "black")};
  transition: 200ms;
  ::after {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    height: 55%;
    width: 3px;
    background-color: snow;
    transform: skewX(-45deg) translateX(2px) translateY(-62%);
  }
  ::before {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    height: 30%;
    width: 3px;
    background-color: snow;
    transform: skewX(25deg) translateX(3px) translateY(-35%);
  }
`;

const CheckBox = ({
  value,
  name,
  onClick,
}: {
  value: boolean;
  name: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}) => {
  return <Wrapper value={value} key={name} data-testid={name} onClick={onClick}></Wrapper>;
};

export default CheckBox;
