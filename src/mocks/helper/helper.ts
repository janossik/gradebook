import faker from "faker"
import { RestRequest, DefaultRequestBody, RequestParams } from "msw";

export const subjects = [
    { name: "economy" },
    { name: "front-end" },
    { name: "back-end" }
]
export const groups = ["A", "B", "C"]

export const getRandomSubject = () => subjects[faker.datatype.number({ min: 0, max: 2 })];
export const getRadomAverage = () => faker.datatype.number({ min: 1, max: 6, precision: 0.5 })
export const getRandomGroup = () => groups[faker.datatype.number({ min: 0, max: 2 })]
export const getRandomValue = (array: any[], index: number) => array[index];
export const eventTypes = ['workshop', 'exam', 'lecture'];
export const authenticateRequest = (req: RestRequest<DefaultRequestBody, RequestParams>) => {
    const token = localStorage.getItem('__be_token__') || null;
    const userToken = req.headers.get('Authorization')?.replace('Bearer ', '');

    return token === userToken;
};