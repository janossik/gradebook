import { removeNote } from "store/store";
import CloseButton from "components/atoms/CloseButton/CloseButton";
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
    <article style={{ marginBottom: "20px" }}>
      <header
        style={{
          position: "relative",
          display: "flex",
          marginLeft: "5px",
          marginBottom: "5px",
          alignItems: "center",
        }}
      >
        <CloseButton onClick={handleRemoveNote} />
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
