import { db } from "mocks/db";
import { rest, RestRequest, RequestParams } from "msw";

const findContainsStudent = rest.post("/search", (req: RestRequest<{ name?: string }, RequestParams>, res, context) => {
    let matchingStudents: any;
    const searched = req.body.name;
    if (searched) {
        matchingStudents = db.student.findMany({
            where: {
                name: {
                    contains: searched.toLowerCase()
                }
            }
        })
    }
    return res(
        context.status(200),
        context.json({
            students: matchingStudents || [],
        })
    );
});



const getAllStudentFromCurrentGroup = rest.get("/groups/:group", (req, res, context) => {
    if (req.params.group) {
        const matchingStudents = db.student.findMany({
            where: {
                group: {
                    equals: req.params.group
                }
            }
        })
        if (!matchingStudents[0]) {
            return res(
                context.status(404),
                context.json({
                    error: "Not Found"
                })
            );
        }
        return res(
            context.status(200),
            context.json({
                students: matchingStudents ? matchingStudents : [],
            })
        );
    }
    return res(
        context.status(404),
        context.json({
            error: "Not Found"
        })
    );

});

const findStudentById = rest.get("/students/:id", (req, res, context) => {

    if (req.params.id) {
        const matchingStudent = db.student.findFirst({
            where: {
                id: {
                    equals: req.params.id
                }
            }
        })
        return res(
            context.status(200),
            context.json({
                student: matchingStudent,
            })
        );
    }

    return res(
        context.status(404),
        context.json({
            error: "Not Found"
        })
    );


});

export const handlersStudents = [findContainsStudent, getAllStudentFromCurrentGroup, findStudentById]