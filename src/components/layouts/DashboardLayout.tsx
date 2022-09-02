import React from "react"
import SideNav from "../navigation/SideNav"

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex relative">
      <SideNav />
      <div className="flex-1 flex flex-col relative">
        <div className="py-12 px-6">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
