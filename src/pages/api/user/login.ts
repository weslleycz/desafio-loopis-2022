import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import * as next from "next";
import {
    Body,
    createHandler,
    Post,
    Res,
    ValidationPipe,
} from "next-api-decorators";
import { prismaClient } from "../../../utils/prismaClient";
import { loginDTO } from "./loginDTO";

class UserLogin {
    @Post()
    public async login(
        @Body(ValidationPipe) body: loginDTO,
        @Res() res: next.NextApiResponse
    ) {
        const { email, password } = body;
        try {
            const data = await prismaClient.user.findUnique({
                where: {
                    email,
                },
            });
            if (!data) {
                return res
                    .status(400)
                    .json({ message: "use not failed", has_error: true });
            }
            if (await compare(password, data.password)) {
                if (process.env.TOKEN_KAY) {
                    return res.status(200).json({
                        token: sign({ data: data.id }, process.env.TOKEN_KAY, {
                            expiresIn: "24h",
                        }),
                    });
                }
            }
        } catch (error) {
            return res.status(400).json({ status: error, has_error: true });
        }
    }
}

export default createHandler(UserLogin);
