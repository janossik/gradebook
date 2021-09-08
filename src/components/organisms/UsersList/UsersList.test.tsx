import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import TestProvider from "providers/TestProvider";
import UserList from "./UsersList";

describe("List of user", () => {
  it("Default render", () => {
    render(
      <TestProvider>
        <>
          <UserList
            id="A"
            users={[
              {
                id: "1",
                name: "Adam Romański",
                attendance: "39%",
                average: "2.3",
                group: "A",
              },
            ]}
          />
        </>
      </TestProvider>
    );
  });

  /*   it("Remove users", () => {
    render(
      <TestProvider>
        <>
          <UserList />
        </>
      </TestProvider>
    );

    const users = screen.getAllByTestId("user");
    const buttons = screen.getAllByRole("button");

    users.forEach((user) => {
      expect(user).toBeInTheDocument();
    });
    buttons.forEach((button) => {
      fireEvent.click(button);
    });
    users.forEach((user) => {
      expect(user).not.toBeInTheDocument();
    });
  }); */
});
