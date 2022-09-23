import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { Transition } from "@mantine/core";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import showNotification from "../../lib/showNotification";
import { Category } from "@prisma/client";
import { fetchCategories } from "../../lib/queries";

type TransactionInput = {
  amount: number;
  date: Date;
  categoryId: string;
  type: string;
  category?: string;
};

const Create = () => {
  const { query } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<TransactionInput>();
  const { data: categories } = useQuery(["categories"], fetchCategories);

  const onSubmit = async (data: TransactionInput) => {
    const resp = await axios.post(`/api/transactions`, {
      ...data,
      date: new Date(data.date),
    });
    if (resp.status === 200) {
      showNotification({
        title: "Transaction successfully created",
        body: "Your transaction has been successfully created",
        type: "success",
      });
      reset();
      return;
    }
    showNotification({
      title: "Something went wrong",
      body: "Your transaction could not be created",
      type: "error",
    });
  };

  const { mutate, isLoading } = useMutation(onSubmit);

  useEffect(() => {
    if (query.type !== "undefined")
      setValue("type", query.type ? (query.type as string) : "");
  }, [query, setValue]);

  const openControls =
    Object.keys(watch()).length > 0
      ? Object.values(watch()).every((x) => {
          if (typeof x === "string") return x === "";
          return isNaN(x as number);
        })
      : false;

  return (
    <DashboardLayout>
      <h4 className="text-lg font-semibold">Create Transaction</h4>
      <p className="mb-2 dark:text-dark-secondary text-light-secondary text-sm">
        On {Intl.DateTimeFormat().format(new Date())}
      </p>
      <div className="p-4 rounded-md box max-w-2xl">
        <h4 className="font-semibold">Transaction Information</h4>
        <hr className="my-4 border-light-line dark:border-dark-line" />
        <form
          onSubmit={handleSubmit((data) => mutate(data))}
          className="flex flex-col gap-4"
        >
          <div className="flex justify-between items-center gap-2">
            <label htmlFor="amount">Type</label>
            <select
              className="input w-3/4"
              {...register("type", { required: true })}
            >
              <option
                className="dark:hover:bg-dark-background-secondary hover:bg-light-background-secondary"
                value=""
              >
                Select Type
              </option>
              <option
                className="dark:hover:bg-dark-background-secondary hover:bg-light-background-secondary"
                value="income"
              >
                Income
              </option>
              <option
                className="dark:hover:bg-dark-background-secondary hover:bg-light-background-secondary"
                value="expense"
              >
                Expense
              </option>
            </select>
          </div>
          {errors.type && (
            <p className="text-red-500 text-sm">Type is required</p>
          )}
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
              placeholder="0"
            />
          </div>
          {errors.amount && (
            <p className="text-red-500 text-sm">Amount is required</p>
          )}
          <div className="flex justify-between items-center gap-2">
            <label htmlFor="date">Date</label>
            <input
              className="input w-3/4"
              type="date"
              {...register("date", { required: true })}
            />
          </div>
          {errors.date && (
            <p className="text-red-500 text-sm">Date is required</p>
          )}
          <div className="flex justify-between items-center gap-2">
            <label htmlFor="amount">Category</label>
            <select
              className="input w-3/4"
              {...register("categoryId", { required: true })}
            >
              <option
                className="dark:hover:bg-dark-background-secondary hover:bg-light-background-secondary"
                value=""
              >
                Select Category
              </option>
              {categories?.map((category: Category) => (
                <option
                  key={category.id}
                  className="dark:hover:bg-dark-background-secondary hover:bg-light-background-secondary"
                  value={category.id}
                >
                  {category.name}
                </option>
              ))}
              <option value="others">Others</option>
            </select>
          </div>
          {errors.categoryId && (
            <p className="text-red-500 text-sm">Category is required</p>
          )}
          {watch()?.categoryId === "others" && (
            <>
              <div className="flex justify-between items-center gap-2">
                <label htmlFor="other">Specify Other:</label>
                <input
                  className="input w-3/4"
                  type="text"
                  {...register("category")}
                  placeholder="Others..."
                />
              </div>
              {errors.category && (
                <p className="text-red-500 text-sm">
                  Other Category is required
                </p>
              )}
            </>
          )}
          <Transition transition="slide-up" mounted={!openControls}>
            {(transitionStyles) => (
              <div className="absolute bottom-10 left-0 right-0 mx-6">
                <div
                  style={transitionStyles}
                  className="p-4 rounded-md box flex items-center justify-between"
                >
                  <p className="font-semibold">There were some changes made.</p>
                  <div className="flex gap-4">
                    <button
                      className="text-sm hover:underline"
                      onClick={() => reset()}
                    >
                      Reset
                    </button>
                    <button
                      disabled={isLoading}
                      type="submit"
                      className="px-4 py-1 bg-purple-600 rounded-md hover:bg-purple-700 text-dark-primary"
                    >
                      {isLoading ? (
                        <div className="animate-spin ease-linear rounded-full border-2 border-t-2 border-t-transparent border-dark-primary h-4 w-4"></div>
                      ) : (
                        "Save"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Create;
