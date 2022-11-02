import * as next from "next";
import { Req, Res,Delete, createHandler } from "next-api-decorators";
import { prismaClient } from "../../../../utils/prismaClient";

class TaskDelete {
    @Delete()
    public async delete(
        @Req() req: next.NextApiRequest,
        @Res() res: next.NextApiResponse
    ) {
        const [id]:any = req.query.id;
        try {
          const data = await prismaClient.task.delete({
          where:{
          id
          }
          })
            return res.status(200).json({ status: "delete", has_error: false });
        } catch (error) {
            return res.status(400).json({ status: error, has_error: true });  
        }
    }
}

export default createHandler(TaskDelete);