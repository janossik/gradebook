import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNote } from "store/store";
import Input from "components/atoms/Input/Input";
import Textarea from "components/atoms/Textarea/Textarea";
import Button from "components/atoms/Button/Button";
import { NoteWithoutId } from "types/types";

enum NotesInputsKey {
  TITLE = "title",
  CONTENT = "content",
}

const NoteForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm<NoteWithoutId>();
  const handleAddNote = (data: NoteWithoutId) => {
    dispatch(addNote(data));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleAddNote)} style={{ maxWidth: "270px" }}>
      <Input {...register(NotesInputsKey.TITLE, { required: true })} placeholder={NotesInputsKey.TITLE} />
      <Textarea {...register(NotesInputsKey.CONTENT, { required: true })} placeholder={NotesInputsKey.CONTENT} />
      <Button type="submit">Add</Button>
    </form>
  );
};
export default NoteForm;
