import { handlersStudents } from "./students";
import { handlersGroups } from "./groups";
import { handlersAuth } from "./auth";
import { handlersNotes } from "./notes";

export const handlers = [...handlersStudents, ...handlersGroups, ...handlersAuth, ...handlersNotes];
