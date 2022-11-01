import { verify } from "jsonwebtoken";
import * as next from "next";
import {
    createHandler, Get, Req,
    Res
} from "next-api-decorators";
import { prismaClient } from "../../../utils/prismaClient";

class DayList{
    @Get() public async list(@Req() req: next.NextApiRequest,
    @Res() res: next.NextApiResponse){
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
                const token = verify(
                    <string>req.headers.authorization,
                    process.env.TOKEN_KAY
                );
                const userId =token.data.toString()
                const data = await prismaClient.day.findMany({
                    where:{
                        userId
                    },
                    include:{
                        tasks:true
                    }
                })
                if (data.length <= 3) {
                    return res
                .status(200)
                .json({ data: data, has_error: false });
                }else{
                    const [index1,index2,index3]=data;
                    return res
                    .status(200)
                    .json({ data: [index1,index2,index3], has_error: false });
                }
            }
        } catch (error) {
            return res.status(400).json({ status: error, has_error: true });
        }
    }

}

export default createHandler(DayList);