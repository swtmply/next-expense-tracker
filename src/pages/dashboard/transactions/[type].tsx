import { Category, Transaction } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import CreateButton from "../../../components/CreateButton";
import DisplayDate from "../../../components/DisplayDate";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import TransactionCard from "../../../components/TransactionCard";
import { fetchTransactions } from "../../../lib/queries";

const Expense = () => {
  const { query } = useRouter();
  const { data, isLoading } = useQuery<
    (Transaction & {
      category: Category;
    })[]
  >(["transactions", query.type], () =>
    fetchTransactions(query.type as string)
  );

  return (
    <DashboardLayout>
      <div className="flex w-full justify-between">
        <h4 className="text-lg font-semibold capitalize">{query.type}s</h4>
        <CreateButton
          label={query.type as string}
          params={query.type as string}
        />
      </div>
      <DisplayDate />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-full h-96 flex justify-center items-center">
            <div className="animate-spin ease-linear rounded-full border-4 border-t-4 border-t-transparent border-purple-500 h-12 w-12"></div>
          </div>
        ) : (
          data?.map((transaction) => (
            <TransactionCard
              key={transaction.id}
              category={transaction.category.name}
              label={query.type as string}
              amount={transaction.amount}
              date={transaction.date}
              color={transaction.category.color}
            />
          ))
        )}
      </div>
    </DashboardLayout>
  );
};

export default Expense;
