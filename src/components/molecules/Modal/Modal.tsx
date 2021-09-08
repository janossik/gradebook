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

const Wrapper = styled.div<{ maxWidth?: string; minWidth?: string }>`
  position: relative;
  width: ${({ maxWidth, minWidth }) =>
    ` clamp(${minWidth ? minWidth : "280px"}, 100%, ${maxWidth ? maxWidth : "600px"})`};
  min-height: 200px;
  padding: 5px 20px 30px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 100;
`;

const HeaderModal = styled.header`
  position: relative;
  height: 10px;
  button {
    position: absolute;
    right: -15px;
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

const RenderModal = ({ setActive, children, maxWidth, minWidth }: IModal) => {
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
        <Wrapper maxWidth={maxWidth} minWidth={minWidth}>
          <HeaderModal>
            <CloseButton onClick={() => setActive(false)} />
          </HeaderModal>
          {children}
        </Wrapper>
      </Background>
    </>,
    modalNode
  );
};

const Modal = ({ active, setActive, children, maxWidth, minWidth }: IModal) => (
  <>
    {active ? (
      <RenderModal setActive={setActive} maxWidth={maxWidth} minWidth={minWidth}>
        {children}
      </RenderModal>
    ) : null}
  </>
);

export default Modal;
