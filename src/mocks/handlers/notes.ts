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

  rest.post("/notes", async (req: RestRequest<{ title?: string; content?: string }, RequestParams>, res, context) => {
    const { title, content } = req.body;
    if (title && content) {
      db.note.create({
        title: title,
        content: content,
      });
      return res(
        context.status(201),
        context.json({
          note: { title, content },
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
  rest.delete("/notes", async (req: RestRequest<{ id: string }, RequestParams>, res, context) => {
    if (req.body.id) {
      db.note.delete({
        where: {
          id: {
            equals: req.body.id,
          },
        },
      });
      return res(
        context.status(201),
        context.json({
          note: "",
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
