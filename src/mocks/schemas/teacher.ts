import faker from "faker";
import { primaryKey } from "@mswjs/data";
import { subjects } from "mocks/helper/helper";

export const teacher = {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.fake(`{{name.firstName}} {{name.lastName}}`),
    subjects: () => subjects,
    login: () => 'teacher@react.com',
    password: () => 'Hard123Hard',
};