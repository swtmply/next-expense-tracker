import type { NextApiRequest, NextApiResponse } from "next";
import { withServerAuth } from "../../../lib/withServerAuth";
import { prisma } from "../../../server/db/client";

export default withServerAuth(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      const categories = await prisma.category.findMany({});

      res.status(200).json(categories);
      break;
    case "POST":
      try {
        await prisma.category.create({
          data: req.body,
        });

        res.status(200).json({ message: "Categories created successfully" });
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
});
