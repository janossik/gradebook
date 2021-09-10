import faker from "faker";
import { primaryKey } from "@mswjs/data";

export const groups = { id: primaryKey(faker.datatype.uuid), data: () => [{ id: "A" }, { id: "B" }, { id: "C" }] }