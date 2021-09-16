import { removeNote } from "actions/actions";
import Title from "components/atoms/Title/Title";
import { useDispatch } from "react-redux";
import { INote } from "types/types";

const Note = (props: INote) => {
  const { title, content } = props;
  const dispatch = useDispatch();

  const handleRemoveNote = () => {
    dispatch(removeNote(props));
  };
  return (
    <article>
      <header style={{ display: "flex" }}>
        <span
          style={{
            marginBottom: "auto",
            marginRight: "10px",
            padding: "5px 10px",
            border: "1px solid black",
            borderRadius: "10px",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={handleRemoveNote}
        >
          X
        </span>
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
