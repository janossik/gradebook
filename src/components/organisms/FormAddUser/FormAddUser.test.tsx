import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import TestProvider from "providers/TestProvider";
import UserList from "../UsersList/UsersList";
import FormAddUser from "./FormAddUser";

describe("Form add user", () => {
  it("Default render", () => {
    render(
      <TestProvider>
        <>
          <UserList />
          <FormAddUser />
        </>
      </TestProvider>
    );
  });
  it("Completing inputs", () => {
    render(
      <TestProvider>
        <>
          <UserList />
          <FormAddUser />
        </>
      </TestProvider>
    );

    const firstName = screen.getByTestId(`firstName`);
    const lastName = screen.getByTestId(`lastName`);
    const score = screen.getByTestId(`score`);
    const attendance = screen.getByTestId(`attendance`);
    const consents = screen.getByTestId(`consents`);

    fireEvent.change(firstName, { target: { value: "Adam" } });
    fireEvent.change(lastName, { target: { value: "Bravo" } });
    fireEvent.change(score, { target: { value: 5 } });
    fireEvent.change(attendance, { target: { value: 0.5 } });

    expect(consents).not.toBeChecked();
    fireEvent.click(consents, { target: { value: true } });
    expect(consents).toBeChecked();

    expect(firstName).toHaveValue("Adam");
    expect(lastName).toHaveValue("Bravo");
    expect(score).toHaveValue(5);
    expect(attendance).toHaveValue(0.5);
  });
  it("clearing inputs", () => {
    render(
      <TestProvider>
        <>
          <UserList />
          <FormAddUser />
        </>
      </TestProvider>
    );

    const firstName = screen.getByTestId(`firstName`);
    const lastName = screen.getByTestId(`lastName`);
    const score = screen.getByTestId(`score`);
    const attendance = screen.getByTestId(`attendance`);
    const consents = screen.getByTestId(`consents`);
    const submit = screen.getByTestId(`submit`);

    fireEvent.change(firstName, { target: { value: "Adam" } });
    fireEvent.change(lastName, { target: { value: "Bravo" } });
    fireEvent.change(score, { target: { value: 5 } });
    fireEvent.change(attendance, { target: { value: 0.5 } });

    fireEvent.click(consents, { target: { value: true } });

    expect(firstName).toHaveValue("Adam");
    expect(lastName).toHaveValue("Bravo");
    expect(score).toHaveValue(5);
    expect(attendance).toHaveValue(0.5);

    fireEvent.click(submit);

    expect(firstName).not.toHaveValue("Adam");
    expect(lastName).not.toHaveValue("Bravo");
    expect(score).toHaveValue(0);
    expect(attendance).toHaveValue(0);
  });

  it("Add user", () => {
    render(
      <TestProvider>
        <>
          <UserList />
          <FormAddUser />
        </>
      </TestProvider>
    );

    const firstName = screen.getByTestId(`firstName`);
    const lastName = screen.getByTestId(`lastName`);
    const score = screen.getByTestId(`score`);
    const attendance = screen.getByTestId(`attendance`);
    const consents = screen.getByTestId(`consents`);
    const submit = screen.getByTestId(`submit`);

    //Completing the form
    fireEvent.change(firstName, { target: { value: "Adam" } });
    fireEvent.change(lastName, { target: { value: "Bravo" } });
    fireEvent.change(score, { target: { value: 5 } });
    fireEvent.change(attendance, { target: { value: 0.5 } });

    fireEvent.click(consents, { target: { value: true } });

    fireEvent.click(submit);

    screen.getByText("Adam Bravo");
    screen.getByText("5");
    screen.getByText(`attendance: 50%`);
    expect(consents).toBeChecked();
  });
});
