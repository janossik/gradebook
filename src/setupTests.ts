// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { handlers } from "mocks/handlers";
import { db } from "mocks/db";

const server = setupServer(...handlers);

beforeAll(() => {
  const createStudents = () => {
    for (let i = 0; i < 50; i++) {
      db.student.create();
    }
  };

  createStudents();
  db.teacher.create();
  db.groups.create();
  db.note.create();
  db.event.create();

  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
