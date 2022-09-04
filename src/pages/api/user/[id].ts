import type { NextApiRequest, NextApiResponse } from "next";
import { withServerAuth } from "../../../lib/withServerAuth";
import { prisma } from "../../../server/db/client";

export default withServerAuth(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      const user = await prisma.user.findUnique({
        where: { id: id as string },
        include: {
          transactions: true,
        },
      });

      res.status(200).json(user);
      break;
    case "PATCH":
      try {
        await prisma.user.update({
          where: { id: id as string },
          data: req.body,
        });

        res.status(200).json({ message: "User updated successfully" });
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    case "DELETE":
      try {
        await prisma.user.delete({
          where: { id: id as string },
        });

        res.status(200).json({ message: "User deleted successfully" });
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
});
