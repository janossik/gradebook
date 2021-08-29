import Button from "components/atoms/Button/Button";
import styled from "styled-components";
import Header from "../Header/Header";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  margin-bottom: 20px;
  background-color: rgba(170, 170, 170, 0.3);
  border-radius: 20px;
  gap: 15px;
  line-height: 1.5;
  section {
    display: flex;
    gap: 10px;
    img {
      padding-left: 10px;
      object-fit: cover;
      pointer-events: none;
    }
    div {
      display: flex;
      flex-direction: column;
      footer {
        padding: 10px 0;
        margin-top: auto;
      }
      img {
        margin-bottom: 20px;
      }
    }
    @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
      flex-direction: column-reverse;
      align-items: center;
    }
  }
`;

interface NewsProps {
  id?: string;
  title: string;
  category: string;
  content: string;
  image?: { url: string };
  alt?: string;
}

const News = ({ title, category, content, image, alt }: NewsProps) => {
  return (
    <Wrapper>
      <Header title={title} category={category} />
      <section>
        <div>
          <p>{content}</p>
          <footer>
            <Button>read more</Button>
          </footer>
        </div>
        {image && (
          <div>
            <img src={image.url} alt={alt} height="200" width="200" />
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default News;
