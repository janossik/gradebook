import { render, screen, fireEvent } from "test-utils";
import { setupServer } from "msw/node";
import { handlers } from "mocks/handlers";
import SearchBar from "./SearchBar";

const server = setupServer(...handlers);

// eslint-disable-next-line jest/valid-describe
describe("Search Bar", async () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("Renders the components", () => {
    render(<SearchBar />);
    screen.getByPlaceholderText("You can search for users here");
  });

  it("Display users when search phrase is matching", async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("You can search for users here");
    fireEvent.change(input, { target: { value: "ad" } });

    await screen.findByText(/Adam Romański/);
  });
});
