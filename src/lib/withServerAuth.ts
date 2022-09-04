import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

export const withServerAuth =
  (handler: NextApiHandler) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerAuthSession({ req, res });

    if (session) {
      return handler(req, res);
    } else {
      res.status(401).json({ error: "Not authenticated" });
    }
  };
