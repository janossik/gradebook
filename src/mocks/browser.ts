import { setupWorker } from "msw";
import { db } from "./db";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

const seed = () => {
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
  db.note.create({
    title: "You need to prepare your exam next week",
    content: "The exam will be in JavaScript and TypeScript, but it will be for beginners",
  });
  db.note.create({
    title: "You need to check last exams",
    content: "Groups A and B are waiting for the results of the outstanding exams",
  });
};

seed();
