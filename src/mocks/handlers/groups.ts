import { rest } from "msw";
import { db } from "mocks/db";

export const getAllGroup = rest.get("/groups", (req, res, context) => {
    const groups = db.groups.getAll()[0].data.map(group => group.id);
    return res(
        context.status(200),
        context.json({
            groups,
        })
    );
});

export const handlersGroups = [getAllGroup]