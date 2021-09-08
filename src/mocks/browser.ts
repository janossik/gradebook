import { setupWorker } from "msw";
import { db } from "./db";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

const createStudents = () => {
    for (let i = 0; i < 50; i++) {
        db.student.create();
    }
}

createStudents()