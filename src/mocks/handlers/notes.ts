import { RequestParams, rest, RestRequest } from "msw";
import { db } from "mocks/db";

export const handlersNotes = [
  rest.get("/notes", (req, res, context) => {
    const notes = db.note.getAll();
    return res(
      context.status(200),
      context.json({
        notes,
      })
    );
  }),

  rest.post("/notes", (req: RestRequest<{ title?: string; content?: string }, RequestParams>, res, context) => {
    const { title, content } = req.body;
    if (title && content) {
      const note = db.note.create({ title, content });
      return res(
        context.status(201),
        context.json({
          note: note,
        })
      );
    }
    return res(
      context.status(400),
      context.json({
        error: "Your note needs have title and content",
      })
    );
  }),
];
