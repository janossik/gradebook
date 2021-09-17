import { NewsProps } from "types/types";
import Header from "../Header/Header";
import { Wrapper, ContentWrapper } from "./News.styles";

const News = ({ title, category, content, image, alt }: NewsProps) => (
  <Wrapper>
    <Header title={title} category={category} />
    <ContentWrapper>
      <div>
        <p>{content}</p>
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
