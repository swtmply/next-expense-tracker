import React from "react"
import DashboardLayout from "../../components/layouts/DashboardLayout"

export type MoneyCardProps = {
  label: string
  amount: number
  color?: string
  date?: Date
}

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex w-full justify-between">
        <h4 className="text-lg font-semibold">Dashboard</h4>
        <button className="px-3 py-1 bg-purple-600 rounded-md hover:bg-purple-700 text-sm">
          <i className={`fa-solid fa-add min-w-[1rem] mr-2`}></i>
          Add Transaction
        </button>
      </div>
      <p className="mb-2 dark:text-dark-secondary text-light-secondary text-sm">
        From {Intl.DateTimeFormat("en-PH").format(new Date())} - To{" "}
        {Intl.DateTimeFormat("en-PH").format(new Date())}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MoneyCard label="Current Balance:" amount={0} />
        <MoneyCard label="Income:" amount={0} />
        <MoneyCard label="Expenses:" amount={0} />
      </div>
    </DashboardLayout>
  )
}

const MoneyCard = ({ label, amount }: MoneyCardProps) => {
  return (
    <div className="dark:bg-dark-background-secondary shadow-md dark:shadow-dark-muted/10 p-4 rounded-md max-w-sm">
      <p className="text-sm text-light-muted dark:text-dark-muted mb-4">
        {label}
      </p>
      <p className="font-semibold">
        Php{" "}
        <span className="text-2xl">{Intl.NumberFormat().format(amount)}</span>
      </p>
    </div>
  )
}

export default Dashboard
