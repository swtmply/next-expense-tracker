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
      const category = await prisma.category.findUnique({
        where: { id: id as string },
      });

      res.status(200).json(category);
      break;
    case "PATCH":
      try {
        await prisma.category.update({
          where: { id: id as string },
          data: req.body,
        });

        res.status(200).json({ message: "Category updated successfully" });
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    case "DELETE":
      try {
        await prisma.category.delete({
          where: { id: id as string },
        });

        res.status(200).json({ message: "Category deleted successfully" });
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
