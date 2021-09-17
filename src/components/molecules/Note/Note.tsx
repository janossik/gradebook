import { useRemoveNoteMutation } from "store/store";
import CloseButton from "components/atoms/CloseButton/CloseButton";
import Title from "components/atoms/Title/Title";
import { INote } from "types/types";

const Note = (props: INote) => {
  const { title, content } = props;
  const [removeNote] = useRemoveNoteMutation({});
  const handleRemoveNote = () => {
    removeNote({ id: props.id });
  };
  return (
    <article style={{ marginBottom: "20px", width: "270px" }}>
      <header
        style={{
          position: "relative",
          display: "flex",
          marginLeft: "5px",
          marginBottom: "5px",
          alignItems: "center",
        }}
      >
        <CloseButton aria-label="delete" onClick={handleRemoveNote} />
        <Title as="h3" fontSize="s" capitalize>
          {title}
        </Title>
      </header>
      <section>
        <p>{content}</p>
      </section>
    </article>
  );
};

export default Note;
