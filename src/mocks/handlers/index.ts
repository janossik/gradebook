import { groups } from "./../data/groups";
import { rest } from "msw";
import { students } from "mocks/data/students";

const handleGroups = rest.get("/groups", (req, res, context) => {
  return res(
    context.status(200),
    context.json({
      groups,
    })
  );
});

const handleStudents = rest.get("/students/:group", (req, res, context) => {
  let matchingStudents: any;
  if (req.params.group) {
    matchingStudents = students.filter((student) => student.group === req.params.group);
  }
  return res(
    context.status(200),
    context.json({
      students: matchingStudents ? matchingStudents : students,
    })
  );
});

export const handlers = [handleStudents, handleGroups];
