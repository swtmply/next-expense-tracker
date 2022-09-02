import React from "react"
import DashboardLayout from "../../components/layouts/DashboardLayout"
import { TransactionCard } from "./expense"

const Income = () => {
  return (
    <DashboardLayout>
      <div className="flex w-full justify-between">
        <h4 className="text-lg font-semibold">Incomes</h4>
        <button className="px-3 py-1 bg-purple-600 rounded-md hover:bg-purple-700 text-sm">
          <i className={`fa-solid fa-add min-w-[1rem] mr-2`}></i>
          Add Income
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
            category="Work Salary"
            label="Income"
            amount={0}
            date={new Date()}
          />
        ))}
      </div>
    </DashboardLayout>
  )
}

export default Income
