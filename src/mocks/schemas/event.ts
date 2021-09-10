import faker from "faker";
import { primaryKey } from "@mswjs/data";
import { getRandomValue, eventTypes, groups } from "mocks/helper/helper";

export const event = {
    id: primaryKey(faker.datatype.uuid),
    type: () => getRandomValue(eventTypes, faker.datatype.number({ min: 0, max: 2 })),
    group: () => getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
    subject: () => faker.fake('{{company.bsAdjective}} {{company.bsNoun}}'),
    date: faker.date.soon,
}