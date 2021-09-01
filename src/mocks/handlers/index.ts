import { rest } from "msw";
import { students } from "mocks/data/students";

const handlersStudents = rest.get("/students", (req, res, context) => {
  return res(
    context.status(200),
    context.json({
      students,
    })
  );
});

export const handlers = [handlersStudents];
