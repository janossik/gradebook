import { render, screen, fireEvent } from "test-utils";

import SearchBar from "./SearchBar";

// eslint-disable-next-line jest/valid-describe
describe("Search Bar", () => {
  it("Renders the components", async () => {
    render(<SearchBar />);
    screen.getByPlaceholderText("You can search for users here");
  });

  it("Display users when search phrase is matching", async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("You can search for users here");
    fireEvent.change(input, { target: { value: "lonnie" } });

    await screen.findByText(/lonnie/);
  });
});
