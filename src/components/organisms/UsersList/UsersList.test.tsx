import { render } from "test-utils";
import UserList from "./UsersList";

describe("List of user", () => {
  it("Default render", () => {
    render(<UserList id="B" />);
  });
});
