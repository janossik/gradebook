import { setupWorker } from "msw";
import { db } from "./db";
import { handlers } from "./handlers";


export const worker = setupWorker(...handlers);

const seed = () => {

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
}

seed()