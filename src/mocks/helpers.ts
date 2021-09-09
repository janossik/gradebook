import { RestRequest, DefaultRequestBody, RequestParams } from "msw";

export const authenticateRequest = (req: RestRequest<DefaultRequestBody, RequestParams>) => {
    const token = localStorage.getItem('__be_token__') || null;
    const userToken = req.headers.get('Authorization')?.replace('Bearer ', '');

    return token === userToken;
};