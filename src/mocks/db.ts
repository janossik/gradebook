import { factory, primaryKey } from "@mswjs/data";
import faker from "faker"
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

const getRadomAverage = () => faker.datatype.number({ min: 1, max: 6, precision: 0.5 })
const groups = ["A", "B", "C"]
const getRandomGroup = () => groups[faker.datatype.number({ min: 0, max: 2 })]
const getRandomValue = (array: any[], index: number) => array[index];
const eventTypes = ['workshop', 'exam', 'lecture'];

const subjects = [{
    name: "economy"
}, {
    name: "front-end"
}, {
    name: "back-end"
}]
const getRandomSubject = () => subjects[faker.datatype.number({ min: 0, max: 2 })]


export const db = factory({
    student: {
        id: primaryKey(faker.datatype.uuid),
        index: () => Math.round(Math.random() * Math.pow(10, 5)).toString(16),
        name: () => faker.fake(`{{name.firstName}} {{name.lastName}}`),
        attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}%`,
        average: () => getRadomAverage(),
        group: () => getRandomGroup(),
        course: () => faker.fake(`{{random.word}} {{random.word}}`),
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
    },
    teacher: {
        id: primaryKey(faker.datatype.uuid),
        name: () => faker.fake(`{{name.firstName}} {{name.lastName}}`),
        subjects: () => subjects,
        login: () => 'teacher@react.com',
        password: () => '1234',
    },
    event: {
        id: primaryKey(faker.datatype.uuid),
        type: () => getRandomValue(eventTypes, faker.datatype.number({ min: 0, max: 2 })),
        group: () => getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
        subject: () => faker.fake('{{company.bsAdjective}} {{company.bsNoun}}'),
        date: faker.date.soon,
    }, note: {
        id: primaryKey(faker.datatype.uuid),
        title: () => 'Lorem ipsum dolor sit amet',
        content: () => 'Lorem ipsum dolor sit amet',
    },
});

