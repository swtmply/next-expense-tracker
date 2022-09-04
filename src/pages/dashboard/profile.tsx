import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useTheme } from "next-themes";

const Profile = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DashboardLayout>
      <div className="flex w-full justify-between mb-2">
        <h4 className="text-lg font-semibold">Preferences</h4>
      </div>
      <div className="p-4 rounded-md box max-w-2xl">
        <h4 className="font-semibold">User Preference</h4>
        <hr className="my-4 border-light-line dark:border-dark-line" />

        <div className="flex justify-between items-center gap-2">
          <label htmlFor="amount">System Theme</label>
          <select
            className="input w-3/4"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option
              className="dark:hover:bg-dark-background-secondary hover:bg-light-background-secondary"
              value="dark"
            >
              Dark Mode
            </option>
            <option
              className="dark:hover:bg-dark-background-secondary hover:bg-light-background-secondary"
              value="light"
            >
              Light Mode
            </option>
          </select>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
