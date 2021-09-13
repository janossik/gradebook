import { render, screen, fireEvent, waitFor } from "test-utils";
import Root from "view/Root";

describe("Root component", () => {
  it("Renders the root component as unauthenticated user", async () => {
    render(<Root />);
    screen.getByPlaceholderText("email");
    screen.getByPlaceholderText("password");
    screen.getByRole("button");
  });
  it("Displays error message when wrong credentials are passed", async () => {
    render(<Root />);
    const email = screen.getByPlaceholderText("email");
    const password = screen.getByPlaceholderText("password");
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    fireEvent.change(email, { target: { value: "teacher@react.com" } });
    fireEvent.change(password, { target: { value: "Hard123Hard1" } });
    fireEvent.click(button);

    await waitFor(() => screen.getByText(/Oops!/));
  });
  it("Renders the root component as authenticated user", async () => {
    render(<Root />);
    const email = screen.getByPlaceholderText("email");
    const password = screen.getByPlaceholderText("password");
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    fireEvent.change(email, { target: { value: "teacher@react.com" } });
    fireEvent.change(password, { target: { value: "Hard123Hard" } });
    fireEvent.click(button);

    await waitFor(() => screen.getByText(/Teacher/));
  });
});
