import { Transaction, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

const useUser = () => {
  const { data: session } = useSession();
  const { data: user, error } = useQuery<
    User & { transactions: Transaction[] }
  >(
    ["user", session?.user?.id],
    async () => {
      const res = await fetch(`/api/user/${session?.user?.id}`);
      return res.json();
    },
    { enabled: !!session?.user?.id }
  );

  return { user, error };
};

export default useUser;
