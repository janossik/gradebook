import styled from "styled-components";
import Note from "components/molecules/Note/Note";
import { useSelector } from "react-redux";
import { IGlobalState, INote } from "types/types";
import NoteForm from "components/organisms/NoteForm/NoteForm";

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
  const notes = useSelector<IGlobalState, INote[]>((state) => state.notes);

  return (
    <Wrapper>
      <NoteForm />
      <section>
        {notes.length ? (
          notes.map((note) => <Note key={note.id} {...note} />)
        ) : (
          <div>Nie masz aktualnie, żadnych notatek</div>
        )}
      </section>
    </Wrapper>
  );
};

export default Notes;
