import { useState, useEffect } from "react";
import axios from "axios";
import News from "components/molecules/News/News";
import { NewsProps } from "types/types";
import { headersAuthorizationDatoCMS, queryNews } from "utils/queries";
import { Wrapper } from "./NewsSection.styles";

const NewsSection = () => {
  const [articles, setArticles] = useState<NewsProps[]>([]);
  const [error, setError] = useState("");

  const axiosResponse = ({ data: { data } }: { data: any }) => {
    setArticles(data.allArticles);
  };
  const axiosError = () => {
    setError("Sorry, we can't load news for you :c");
  };
  useEffect(() => {
    axios
      .post("https://graphql.datocms.com/", queryNews, headersAuthorizationDatoCMS)
      .then(axiosResponse)
      .catch(axiosError);
  }, []);

  return (
    <Wrapper>
      {articles.length > 0 ? (
        articles.map((news) => {
          return <News key={news.id} {...news} />;
        })
      ) : (
        <div>{error ? error : "loading..."}</div>
      )}
    </Wrapper>
  );
};

export default NewsSection;
