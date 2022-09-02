import React from "react"
import { useForm } from "react-hook-form"
import DashboardLayout from "../../components/layouts/DashboardLayout"

type TransactionInput = {
  amount: number
  date: Date
  category: string | number
}

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransactionInput>()

  const onSubmit = (data: TransactionInput) => console.log(data)

  return (
    <DashboardLayout>
      <h4 className="text-lg font-semibold">Create Transaction</h4>
      <p className="mb-2 dark:text-dark-secondary text-light-secondary text-sm">
        On {Intl.DateTimeFormat("en-PH").format(new Date())}
      </p>
      <div className="p-4 rounded-md box max-w-2xl">
        <h4 className="font-semibold">Transaction Information</h4>
        <hr className="my-4 border-light-line dark:border-dark-line" />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-2">
            <label htmlFor="amount">Amount</label>
            <input
              className="input w-3/4"
              type="number"
              {...register("amount", {
                required: true,
                valueAsNumber: true,
                validate: (value) => value > 0,
              })}
              placeholder="0.00"
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount.message}</p>
            )}
          </div>
          <div className="flex justify-between items-center gap-2">
            <label htmlFor="date">Date</label>
            <input
              className="input w-3/4"
              type="date"
              {...register("date", { required: true })}
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <label htmlFor="category">Category</label>
            <input
              className="input w-3/4"
              type="text"
              {...register("category", { required: true })}
            />
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}

export default Create
