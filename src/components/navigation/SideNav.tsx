import { signOut } from "next-auth/react"
import Link from "next/link"
import React from "react"
import NavLink from "./NavLink"

const SideNav = () => {
  return (
    <div className="min-h-screen max-h-screen overflow-y-auto min-w-min sm:min-w-[18rem] px-3 py-4 sticky top-0 box border-r border-light-line dark:border-dark-line flex flex-col">
      <div className="w-full pb-4 h-16 flex items-center justify-center border-b border-light-line dark:border-dark-line text-center">
        <h1 className="font-bold sm:text-xl max-w-[2rem] sm:max-w-none">
          Allen Expense Tracker
        </h1>
      </div>
      <div className="py-4 border-b border-light-line dark:border-dark-line">
        <p className="text-sm text-light-muted dark:text-dark-muted hidden sm:block">
          Home
        </p>
        <NavLink href="/dashboard" icon="fa-house" text="Dashboard" />
      </div>
      <div className="py-4 border-b border-light-line dark:border-dark-line">
        <p className="text-sm text-light-muted dark:text-dark-muted hidden sm:block">
          Forms
        </p>
        <div className="flex flex-col gap-4 sm:gap-2">
          <NavLink href="/dashboard/expense" icon="fa-coin" text="Expenses" />
          <NavLink href="/dashboard/income" icon="fa-peso-sign" text="Income" />
          <NavLink href="/dashboard/budget" icon="fa-receipt" text="Budget" />
        </div>
      </div>
      <div className="py-4 border-b border-light-line dark:border-dark-line">
        <p className="text-sm text-light-muted dark:text-dark-muted hidden sm:block">
          Account
        </p>
        <div className="flex flex-col gap-4 sm:gap-2">
          <Link href="/dashboard/profile">
            <a
              className={
                "flex gap-4 items-center justify-center sm:justify-start px-2 py-1 w-full hover:bg-light-background dark:hover:bg-dark-background  hover:text-light-primary dark:hover:text-dark-primary transition-colors rounded cursor-pointer text-light-secondary dark:text-dark-secondary"
              }
            >
              <i className={`fa-solid fa-gear min-w-[1rem]`}></i>
              <p className="hidden sm:block">Preferences</p>
            </a>
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className={
              "flex gap-4 items-center justify-center sm:justify-start px-2 py-1 w-full hover:bg-light-background dark:hover:bg-dark-background  hover:text-light-primary dark:hover:text-dark-primary transition-colors rounded cursor-pointer text-light-secondary dark:text-dark-secondary"
            }
          >
            <i className={`fa-solid fa-right-from-bracket min-w-[1rem]`}></i>
            <p className="hidden sm:block">Logout</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SideNav
