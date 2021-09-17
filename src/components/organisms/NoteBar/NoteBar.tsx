import Note from "components/molecules/Note/Note";
import useHandleModal from "hooks/useHandleModal";
import { RefObject } from "react";
import { useGetNotesQuery } from "store/api/notes";
import { INote } from "types/types";
import { Tag, Wrapper } from "./NoteBar.styles";

const NoteBar = () => {
  const { visible, ref, inverse } = useHandleModal(false);
  const { data, isLoading } = useGetNotesQuery<{ data: { notes: INote[] }; isLoading: boolean }>({});

  return (
    <>
      {isLoading ? null : (
        <>
          {data.notes.length ? (
            <Wrapper ref={ref as RefObject<HTMLDivElement>} visible={visible}>
              <Tag aria-label="show-notes" onClick={inverse}>
                notes
              </Tag>
              <div>
                {data.notes.map((note) => (
                  <Note key={note.id} {...note} />
                ))}
              </div>
            </Wrapper>
          ) : null}
        </>
      )}
    </>
  );
};

export default NoteBar;
