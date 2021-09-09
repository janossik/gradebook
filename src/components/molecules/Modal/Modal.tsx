import CloseButton from "components/atoms/CloseButton/CloseButton";
import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

const Wrapper = styled.div<{ maxHeight?: string; maxWidth?: string; minWidth?: string }>`
  position: relative;
  width: ${({ maxWidth, minWidth }) =>
    ` clamp(${minWidth ? minWidth : "280px"}, 100%, ${maxWidth ? maxWidth : "600px"})`};

  height: clamp(300px, 100%, ${({ maxHeight }) => (maxHeight ? maxHeight : "70%")});
  margin: 0 10px;
  padding-top: 5px;
  padding-bottom: 30px;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 100;
`;

const WrapperContent = styled.section`
  position: relative;
  height: 100%;
  padding: 0 10px 0;
  overflow-y: auto;
`;

const HeaderModal = styled.header`
  position: relative;
  height: 10px;
  button {
    position: absolute;
    top: -45px;
    right: -2px;
    margin-left: auto;
  }
`;

const modalContainer = document.getElementById("modal-container");

interface IModal {
  active?: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: JSX.Element;
  maxWidth?: string;
  minWidth?: string;
  maxHeight?: string;
}

const useCloseModalIfClickBackground = (
  refTargetClose: RefObject<HTMLDivElement>,
  setActive: Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    const current = refTargetClose.current;
    const closeModal: (this: HTMLDivElement, ev: MouseEvent) => any = ({ target }) => {
      if (current === target) {
        setActive(false);
      }
    };
    current?.addEventListener("click", closeModal);
    return () => {
      current?.removeEventListener("click", closeModal);
    };
  }, [refTargetClose, setActive]);
};

const RenderModal = ({ setActive, children, maxWidth, minWidth, maxHeight }: IModal) => {
  const modalNode = document.createElement("div");
  const ref = useRef<HTMLDivElement>(null);
  useCloseModalIfClickBackground(ref, setActive);

  useEffect(() => {
    if (!modalContainer) return;
    modalContainer?.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return createPortal(
    <>
      <Background ref={ref}>
        <Wrapper maxWidth={maxWidth} minWidth={minWidth} maxHeight={maxHeight}>
          <HeaderModal>
            <CloseButton onClick={() => setActive(false)} />
          </HeaderModal>
          <WrapperContent>{children}</WrapperContent>
        </Wrapper>
      </Background>
    </>,
    modalNode
  );
};

const Modal = ({ active, setActive, children, maxWidth, minWidth, maxHeight }: IModal) => (
  <>
    {active ? (
      <RenderModal setActive={setActive} maxWidth={maxWidth} minWidth={minWidth} maxHeight={maxHeight}>
        {children}
      </RenderModal>
    ) : null}
  </>
);

export default Modal;
