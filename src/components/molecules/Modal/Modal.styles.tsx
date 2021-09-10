import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

export const Wrapper = styled.div<{ maxHeight?: string; maxWidth?: string; minWidth?: string }>`
  position: relative;
  width: ${({ maxWidth, minWidth }) =>
    ` clamp(${minWidth ? minWidth : "280px"}, 100%, ${maxWidth ? maxWidth : "600px"})`};

  height: clamp(300px, 100%, ${({ maxHeight }) => (maxHeight ? maxHeight : "70%")});
  margin: 0 10px;
  padding-top: 5px;
  padding-bottom: 30px;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 999;
`;

export const WrapperContent = styled.section`
  position: relative;
  height: 100%;
  padding: 0 10px 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const HeaderModal = styled.header`
  position: relative;
  height: 10px;
  button {
    position: absolute;
    top: -45px;
    right: -2px;
    margin-left: auto;
  }
`;
