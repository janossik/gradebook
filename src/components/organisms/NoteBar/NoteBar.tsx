import Note from "components/molecules/Note/Note";
import useHandleModal from "hooks/useHandleModal";
import { RefObject } from "react";
import { useGetNotesQuery } from "store/store";
import { INote } from "types/types";
import { Tag, Wrapper } from "./NoteBar.styles";

const NoteBar = () => {
  const { visible, ref, inverse } = useHandleModal(false);
  const { data, isLoading } = useGetNotesQuery<{ data: { notes: INote[] }; isLoading: boolean }>({});

  return (
    <>
      {isLoading ? null : (
        <Wrapper ref={ref as RefObject<HTMLDivElement>} visible={visible}>
          <Tag onClick={inverse}>notes</Tag>
          <div>
            {data.notes.map((note) => (
              <Note key={note.id} {...note} />
            ))}
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default NoteBar;
