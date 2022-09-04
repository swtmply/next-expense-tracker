import type { NextApiRequest, NextApiResponse } from "next";
import { withServerAuth } from "../../../lib/withServerAuth";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
import { prisma } from "../../../server/db/client";

export default withServerAuth(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;
  const { category, categoryId, ...rest } = req.body;
  const session = await getServerAuthSession({ req, res });

  switch (method) {
    case "GET":
      const transactions = await prisma.transaction.findMany({
        where: {
          userId: session?.user?.id as string,
          type: query.type as string,
        },
        include: {
          category: true,
        },
      });

      res.status(200).json(transactions);
      break;
    case "POST":
      try {
        await prisma.transaction.create({
          data: {
            ...rest,
            user: {
              connect: {
                id: session?.user?.id as string,
              },
            },
            category: categoryId
              ? { connect: { id: categoryId } }
              : { create: category },
          },
        });

        await prisma.user.update({
          where: {
            id: session?.user?.id as string,
          },
          data: {
            balance:
              req.body.type === "income"
                ? { increment: req.body.amount }
                : { decrement: req.body.amount },
          },
        });

        res.status(200).json({ message: "Transaction created successfully" });
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
