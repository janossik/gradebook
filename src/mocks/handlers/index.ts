import { groups } from "./../data/groups";
import { RequestParams, rest, RestRequest } from "msw";
import { students } from "mocks/data/students";
import { db } from "mocks/db";

const searchStudents = rest.post("/search", (req: RestRequest<{ name?: string }, RequestParams>, res, context) => {
  let matchingStudents: any;
  const searched = req.body.name;
  if (searched) {
    matchingStudents = students.filter((student) =>
      student.name.toLocaleLowerCase().includes(searched.toLocaleLowerCase())
    );
  }
  return res(
    context.status(200),
    context.json({
      students: matchingStudents || [],
    })
  );
});

const handleGroups = rest.get("/groups", (req, res, context) => {
  return res(
    context.status(200),
    context.json({
      groups,
    })
  );
});

const handleStudents = rest.get("/groups/:group", (req, res, context) => {
  if (req.params.group) {
    const matchingStudents = db.student.findMany({
      where: {
        group: {
          equals: req.params.group
        }
      }
    })
    return res(
      context.status(200),
      context.json({
        students: matchingStudents ? matchingStudents : students,
      })
    );
  }
});

const handleStudent = rest.get("/students/:id", (req, res, context) => {

  if (req.params.id) {
    const matchingStudent = db.student.findFirst({
      where: {
        id: {
          equals: req.params.id
        }
      }
    })
    return res(
      context.status(200),
      context.json({
        student: matchingStudent,
      })
    );
  }

  return res(
    context.status(404),
    context.json({
      error: "Not Found"
    })
  );


});

export const handlers = [handleStudents, handleGroups, searchStudents, handleStudent];
