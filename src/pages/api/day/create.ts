import { verify } from "jsonwebtoken";
import * as next from "next";
import {
    Body,
    createHandler,
    Post,
    Req,
    Res,
    ValidationPipe,
} from "next-api-decorators";
import { prismaClient } from "../../../utils/prismaClient";
import { createDTO } from "./createDTO";

type JDWDTO = {
    data: string;
    iat: number;
    exp: number;
};

class DayCreate {
    @Post() public async create(
        @Body(ValidationPipe) body: createDTO,
        @Req() req: next.NextApiRequest,
        @Res() res: next.NextApiResponse
    ): Promise<void> {
        try {
            if (process.env.TOKEN_KAY) {
                const token = verify(
                    <string>req.headers.authorization,
                    process.env.TOKEN_KAY
                );
            }
        } catch (error) {
            return res
                .status(401)
                .json({ status: "Not authorized", has_error: true });
        }
        try {
            if (process.env.TOKEN_KAY) {
                const { data } = body;
                const token = verify(
                    <string>req.headers.authorization,
                    process.env.TOKEN_KAY
                );
                const day = <JDWDTO>(<unknown>await prismaClient.day.create({
                    data: {
                        data,
                        userId: token.data,
                    },
                }));
                return res
                    .status(200)
                    .json({ status: "create", has_error: false });
            }
        } catch (error) {
            return res.status(400).json({ status: error, has_error: true });
        }
    }
}

export default createHandler(DayCreate);
