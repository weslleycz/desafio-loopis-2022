import * as next from "next";
import { Body, createHandler, Post, Req, Res, ValidationPipe } from "next-api-decorators";
import { prismaClient } from "../../../utils/prismaClient";
import { createDTO } from "./createDTO";

class TaskCreate {
    @Post()
    public async create(
        @Body(ValidationPipe) body: createDTO,
        @Req() req: next.NextApiRequest,
        @Res() res: next.NextApiResponse
    ) {
        try {
            const {dayID,description,hour,name} = body;
            console.log(body);
            const task = await prismaClient.task.create({
                data:{
                    name,
                    description,
                    dayId:dayID,
                    hour
                }
            })
            return res
            .status(200)
            .json({ status: "create", has_error: false });
        } catch (error) {
            return res.status(400).json({ status: error, has_error: true });
        }
    }
}

export default createHandler(TaskCreate);
