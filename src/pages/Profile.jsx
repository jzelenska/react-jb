// src/pages/Profile.jsx
import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useNotification } from "../context/NotificationContext";

const Profile = () => {
  const { addNotification } = useNotification();
  const [name, setName] = useState("John Doe");

  const handleUpdate = () => {
    addNotification("Profile updated successfully", "success");
  };

  return (
    <DashboardLayout>
      <h2 className="text-lg font-semibold mb-4">Profile</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Profile;

