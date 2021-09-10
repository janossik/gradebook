import faker from "faker";
import { primaryKey } from "@mswjs/data";

export const note = {
    id: primaryKey(faker.datatype.uuid),
    title: () => 'Lorem ipsum dolor sit amet',
    content: () => 'Lorem ipsum dolor sit amet',
}