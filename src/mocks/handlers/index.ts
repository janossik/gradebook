import { handlersStudents } from "./students";
import { handlersGroups } from "./groups";
import { handlersAuth } from "./auth";

export const handlers = [...handlersStudents, ...handlersGroups, ...handlersAuth];
