import React from "react"
import { MoneyCardProps } from "."
import DashboardLayout from "../../components/layouts/DashboardLayout"
import { colors } from "../../lib/colors"

interface TransactionCardProps extends MoneyCardProps {
  date: Date
  category?: string
  color?: string
}

const Expense = () => {
  return (
    <DashboardLayout>
      <div className="flex w-full justify-between">
        <h4 className="text-lg font-semibold">Expenses</h4>
        <button className="px-3 py-1 bg-purple-600 rounded-md hover:bg-purple-700 text-sm">
          <i className={`fa-solid fa-add min-w-[1rem] mr-2`}></i>
          Add Expense
        </button>
      </div>
      <p className="mb-2 dark:text-dark-secondary text-light-secondary text-sm">
        From {Intl.DateTimeFormat("en-PH").format(new Date())} - To{" "}
        {Intl.DateTimeFormat("en-PH").format(new Date())}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(10)].map((_, i) => (
          <TransactionCard
            key={i}
            category="Clothing"
            label="Expense"
            amount={0}
            date={new Date()}
          />
        ))}
      </div>
    </DashboardLayout>
  )
}

export const TransactionCard = ({
  label,
  amount,
  date,
  category,
  color = "gray",
}: TransactionCardProps) => {
  return (
    <div className="dark:bg-dark-background-secondary shadow-md dark:shadow-dark-muted/10 p-4 rounded-md max-w-sm">
      <p className="w-full flex justify-between text-sm text-light-muted dark:text-dark-muted mb-4">
        <span className="flex flex-col text-xs">
          {label}
          <span className="dark:text-dark-primary text-light-primary text-xl">
            {category}
          </span>
        </span>
        <span className={`rounded-full w-6 h-6 ${colors[color]}`}></span>
      </p>
      <p className="font-semibold">
        Php{" "}
        <span className="text-2xl">{Intl.NumberFormat().format(amount)}</span>
      </p>
      <p className="dark:text-dark-secondary text-light-secondary text-sm">
        Date: {Intl.DateTimeFormat("en-PH").format(date)}
      </p>
    </div>
  )
}

export default Expense
