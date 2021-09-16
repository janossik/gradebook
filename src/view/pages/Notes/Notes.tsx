import styled from "styled-components";
import Note from "components/molecules/Note/Note";
import { INote } from "types/types";
import NoteForm from "components/organisms/NoteForm/NoteForm";
import { useGetNotesQuery } from "store/store";

const Wrapper = styled.article`
  display: grid;
  width: 100%;
  margin: 0 auto;
  justify-items: center;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    grid-template-columns: 0.5fr 0.5fr;
    padding: 20px;
  }
`;

const Notes = () => {
  const { data, isLoading } = useGetNotesQuery<{ data: { notes: INote[] }; isLoading: boolean }>({});
  return (
    <Wrapper>
      <NoteForm />
      <section>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {data.notes.length ? (
              data.notes.map((note) => <Note key={note.id} {...note} />)
            ) : (
              <div>You can add new note</div>
            )}
          </>
        )}
      </section>
    </Wrapper>
  );
};

export default Notes;
