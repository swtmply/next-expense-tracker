import React from "react";
import CreateButton from "../../components/CreateButton";
import DisplayDate from "../../components/DisplayDate";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import useUser from "../../hooks/useUser";

export type MoneyCardProps = {
  label: string;
  amount: number;
  color?: string;
  date?: Date;
};

const Dashboard = () => {
  const { user } = useUser();
  const incomes = user?.transactions
    .map((t) => (t.type === "income" ? t.amount : 0))
    .reduce((a, b) => a + b, 0);
  const expenses = user?.transactions
    .map((t) => (t.type === "expense" ? t.amount : 0))
    .reduce((a, b) => a + b, 0);

  return (
    <DashboardLayout>
      <div className="flex w-full justify-between">
        <h4 className="text-lg font-semibold">Dashboard</h4>
        <CreateButton label="Transaction" />
      </div>
      <DisplayDate />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MoneyCard label="Current Balance:" amount={user?.balance ?? 0} />
        <MoneyCard label="Income:" amount={incomes ?? 0} />
        <MoneyCard label="Expenses:" amount={expenses ?? 0} />
      </div>
    </DashboardLayout>
  );
};

const MoneyCard = ({ label, amount }: MoneyCardProps) => {
  return (
    <div className="bg-dark-primary dark:bg-dark-background-secondary shadow-md dark:shadow-dark-muted/10 p-4 rounded-md max-w-full">
      <p className="text-sm text-light-muted dark:text-dark-muted mb-4">
        {label}
      </p>
      <p className="font-semibold">
        Php{" "}
        <span className="text-2xl">{Intl.NumberFormat().format(amount)}</span>
      </p>
    </div>
  );
};

export default Dashboard;
