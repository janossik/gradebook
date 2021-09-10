import { primaryKey } from "@mswjs/data";
import faker from "faker";
import { getRadomAverage, getRandomGroup, subjects, getRandomSubject } from "mocks/helper/helper";

export const student = {
    id: primaryKey(faker.datatype.uuid),
    index: () => Math.round(Math.random() * Math.pow(10, 5)).toString(16),
    name: () => faker.fake(`{{name.firstName}} {{name.lastName}}`).toLowerCase(),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}%`,
    average: () => getRadomAverage(),
    group: () => getRandomGroup(),
    course: () => faker.fake(`{{random.word}} {{random.word}}`).toLowerCase(),
    subjects: () => subjects,
    grades: () => [
        {
            id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
            subject: getRandomSubject().name,
            average: getRadomAverage()
        },
        {
            id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
            subject: getRandomSubject().name,
            average: getRadomAverage()
        },
        {
            id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
            subject: getRandomSubject().name,
            average: getRadomAverage()
        },
        {
            id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
            subject: getRandomSubject().name,
            average: getRadomAverage()
        },
        {
            id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
            subject: getRandomSubject().name,
            average: getRadomAverage()
        },
        {
            id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
            subject: getRandomSubject().name,
            average: getRadomAverage()
        },
        {
            id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
            subject: getRandomSubject().name,
            average: getRadomAverage()
        },
        {
            id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
            subject: getRandomSubject().name,
            average: getRadomAverage()
        },
        {
            id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
            subject: getRandomSubject().name,
            average: getRadomAverage()
        },
        {
            id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
            subject: getRandomSubject().name,
            average: getRadomAverage()
        },
        {
            id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
            subject: getRandomSubject().name,
            average: getRadomAverage()
        },
        {
            id: Math.round(Math.random() * Math.pow(10, 10)).toString(16),
            subject: getRandomSubject().name,
            average: getRadomAverage()
        },
    ]
}