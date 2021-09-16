import Note from "components/molecules/Note/Note";
import useHandleModal from "hooks/useHandleModal";
import { RefObject } from "react";
import { useSelector } from "react-redux";
import { IGlobalState, INote } from "types/types";
import { Tag, Wrapper } from "./NoteBar.styles";

const NoteBar = () => {
  const notes = useSelector<IGlobalState, INote[]>((state) => state.notes);
  const { visible, ref, inverse } = useHandleModal(false);

  return (
    <>
      {notes.length ? (
        <Wrapper ref={ref as RefObject<HTMLDivElement>} visible={visible}>
          <Tag onClick={inverse}>notes</Tag>
          <div>
            {notes.map((note) => (
              <Note key={note.id} {...note} />
            ))}
          </div>
        </Wrapper>
      ) : null}
    </>
  );
};

export default NoteBar;
