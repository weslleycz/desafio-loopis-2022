import { hash } from "bcrypt";
import * as next from "next";
import {
    Body,
    createHandler,
    Post,
    Res,
    ValidationPipe,
} from "next-api-decorators";
import { prismaClient } from "../../../utils/prismaClient";
import { createDTO } from "./createDTO";

class UserCreate {
    @Post()
    public async create(
        @Body(ValidationPipe) body: createDTO,
        @Res() res: next.NextApiResponse
    ) {
        const { email, password } = body;
        try {
            const data = await prismaClient.user.create({
                data: {
                    email,
                    password: await hash(password, 10),
                },
            });
            return res.status(200).json({ status: "create", has_error: false });
        } catch (error) {
            return res.status(400).json({ status: error, has_error: true });
        }
    }
}

export default createHandler(UserCreate);
