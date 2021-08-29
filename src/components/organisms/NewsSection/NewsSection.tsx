import axios from "axios";
import News from "components/molecules/News/News";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 90px;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  grid-row: 1/3;
  grid-column: 2/3;
  height: 95vh;
  overflow: scroll;
  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    height: 100%;
    padding-right: 0px;
    grid-row: 3/4;
    grid-column: 1/2;
    overflow: auto;
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

const NewsSection = () => {
  const [articles, setArticles] = useState<NewsProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
      {
        allArticles {
          id
          title
          category
          content
          image{
            url
          }
        }
      }
      `,
        },
        { headers: { authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` } }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError("Sorry, we can't load news for you :c");
      });
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
