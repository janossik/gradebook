import Button from "components/atoms/Button/Button";
import { NewsProps } from "types/types";
import Header from "../Header/Header";
import { Wrapper, ContentWrapper } from "./News.styles";

const News = ({ title, category, content, image, alt }: NewsProps) => (
  <Wrapper>
    <Header title={title} category={category} />
    <ContentWrapper>
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
    </ContentWrapper>
  </Wrapper>
);


export default News;
