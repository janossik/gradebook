import faker from "faker";
import { factory } from "@mswjs/data";
import { student } from "./schemas/student";
import { teacher } from "./schemas/teacher";
import { event } from "./schemas/event";
import { note } from "./schemas/note";
import { groups } from "./schemas/groups";

faker.seed(123);

export const db = factory({
  student: student,
  teacher: teacher,
  groups: groups,
  event: event,
  note: note,
});
