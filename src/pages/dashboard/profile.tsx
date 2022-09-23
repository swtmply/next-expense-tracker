import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import UserPreferences from "../../components/UserPreferences";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="flex w-full justify-between mb-2">
        <h4 className="text-lg font-semibold">Preferences</h4>
      </div>
      <UserPreferences />
    </DashboardLayout>
  );
};

export default Profile;
