import { setupWorker } from "msw";
import { db } from "./db";
import { auth } from "./handlers/auth";
import { handlersGroups } from "./handlers/groups";
import { handlersStudents } from "./handlers/students";

export const worker = setupWorker(...handlersStudents, ...auth, ...handlersGroups);

const createStudents = () => {
    for (let i = 0; i < 50; i++) {
        db.student.create();
    }
}

createStudents()
db.teacher.create();
db.groups.create();
db.note.create();
db.event.create();