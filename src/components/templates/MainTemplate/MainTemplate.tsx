import Note from "components/molecules/Note/Note";
import Navigation from "components/organisms/Navigation/Navigation";
import NewsSection from "components/organisms/NewsSection/NewsSection";
import TopBar from "components/organisms/TopBar/TopBar";
import useHandleModal from "hooks/useHandleModal";
import { RefObject } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IGlobalState, INote } from "types/types";
import { Wrapper } from "./MainTemplate.styles";

const WrapperNotesBar = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 70px;
  right: 0%;
  max-width: 280px;
  height: 500px;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.background};
  border: 2px solid ${({ theme }) => theme.color.secondary};
  transform: translateX(${({ visible }) => (visible ? "0%" : "100%")});
  transition: 400ms;
  z-index: 10;
  button {
    position: absolute;
    top: 40px;
    left: -40px;
    padding: 5px 10px;
    color: ${({ theme }) => theme.color.background};
    transform: rotate(270deg);
    border: none;
    background-color: ${({ theme }) => theme.color.secondary};
  }
  div {
    height: 100%;
    padding-right: 10px;
    overflow-y: auto;
  }
`;

const NotesBar = () => {
  const notes = useSelector<IGlobalState, INote[]>((state) => state.notes);
  const { visible, ref, inverse } = useHandleModal(false);
  return (
    <>
      {notes.length ? (
        <WrapperNotesBar ref={ref as RefObject<HTMLDivElement>} visible={visible}>
          <button onClick={inverse}>notes</button>
          <div>
            {notes.map((note) => (
              <Note key={note.id} {...note} />
            ))}
          </div>
        </WrapperNotesBar>
      ) : null}
    </>
  );
};

const MainTemplate = ({ children, withoutElements }: { children: JSX.Element; withoutElements?: boolean }) => {
  return (
    <>
      {!withoutElements && <Navigation />}
      <Wrapper>
        {!withoutElements && (
          <>
            <TopBar />
            <NewsSection />
          </>
        )}
        <NotesBar />
        {children}
      </Wrapper>
    </>
  );
};

export default MainTemplate;
