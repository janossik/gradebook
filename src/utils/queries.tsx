export const queryNews = {
  query: `{
  allArticles {
    id
    title
    category
    content
    image{
      url
    }
  }
}`,
};

export const headersAuthorizationDatoCMS = {
  headers: { authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
};
