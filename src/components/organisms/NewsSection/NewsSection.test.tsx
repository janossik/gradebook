import { render, screen } from "@testing-library/react";
import TestProvider from "providers/TestProvider";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { queryNews } from "utils/queries";
import NewsSection from "./NewsSection";

const mock = new MockAdapter(axios);

const errorMessage = "Sorry, we can't load news for you :c";

describe("News section", () => {
  afterEach(() => {
    mock.reset();
  });
  it("Displays error when the news are not loaded correctly", async () => {
    mock.onPost("https://graphql.datocms.com/", queryNews).reply(500);
    render(
      <TestProvider>
        <NewsSection />
      </TestProvider>
    );
    await screen.findByText(errorMessage);
  });
  it("Displays the news", async () => {
    mock.onPost("https://graphql.datocms.com/", queryNews).reply(200, {
      data: { allArticles: [{ id: "1", title: "It is Test", category: "Test", content: "Test" }] },
    });
    render(
      <TestProvider>
        <NewsSection />
      </TestProvider>
    );
    await screen.findByText(/It is Test/);
    await screen.findAllByText(/Test/);
  });
});
