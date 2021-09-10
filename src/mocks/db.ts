import faker from "faker"
import { factory } from "@mswjs/data";
import { student } from "./schemas/student"
import { teacher } from "./schemas/teacher";
import { event } from "./schemas/event";
import { note } from "./schemas/note";
import { groups } from "./schemas/groups";

/* 
{
        id: string,
        index: string,
        name: string,
        attendance: string,
        average:number,
        group: string,
        course: string,
        subjects: {name:string}[],
        grades: {id:string,subject:string, average:string}[]
    }
*/

faker.seed(123);

export const db = factory({
    student: student,
    teacher: teacher,
    groups: groups,
    event: event, note: note,
});

