import { FormEvent, useState } from "react";
import Button from "components/atoms/Button/Button";
import FiledInput from "components/molecules/FiledInput/FiledInput";
import styled from "styled-components";
import FiledTextarea from "components/molecules/FiledTextarea/FiledTextarea";
import Note from "components/molecules/Note/Note";
import { useDispatch, useSelector } from "react-redux";
import { IGlobalState, INote } from "types/types";
import { TypeActions } from "utils/utils";
import { addNote } from "actions/actions";

enum NotesInputsKey {
  TITLE = "title",
  CONTENT = "content",
}
const FormNote = () => {
  const [note, setNote] = useState({ title: "", content: "" });
  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(addNote(note));
  };
  const submitNoteForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddNote();
    setNote({ title: "", content: "" });
  };

  const handleInput = (nameValue: string) => {
    return (e: { target: { value: string } }) => {
      setNote((v) => ({ ...v, [nameValue]: e.target.value }));
    };
  };

  return (
    <form onSubmit={submitNoteForm}>
      <FiledInput
        placeholder="Title new note"
        name={NotesInputsKey.TITLE}
        value={note[NotesInputsKey.TITLE]}
        onChange={handleInput(NotesInputsKey.TITLE)}
      >
        {NotesInputsKey.TITLE}
      </FiledInput>
      <FiledTextarea
        placeholder="Content for new note"
        name={NotesInputsKey.CONTENT}
        value={note[NotesInputsKey.CONTENT]}
        onChange={handleInput(NotesInputsKey.CONTENT)}
      >
        {NotesInputsKey.CONTENT}
      </FiledTextarea>
      <Button type="submit">Add</Button>
    </form>
  );
};

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
      <FormNote />
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
