import { setupWorker } from "msw";
import { db } from "./db";
import { handlers } from "./handlers";
import { auth } from "./handlers/auth";

export const worker = setupWorker(...handlers, ...auth);

const createStudents = () => {
    for (let i = 0; i < 50; i++) {
        db.student.create();
    }
}

createStudents()
db.teacher.create();