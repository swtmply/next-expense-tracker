import React from "react";
import { useTheme } from "next-themes";

const UserPreferences = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-4 rounded-md box max-w-2xl">
      <h4 className="font-semibold">User Preference</h4>
      <hr className="my-4 border-light-line dark:border-dark-line" />

      <div className="flex justify-between items-center gap-2">
        <label htmlFor="amount">System Theme</label>
        <select
          className="input w-3/4"
          defaultValue={theme}
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
  );
};

export default UserPreferences;
