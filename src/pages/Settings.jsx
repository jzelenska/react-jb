
// src/pages/Settings.jsx
import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useNotification } from "../context/NotificationContext";

const Settings = () => {
  const { addNotification } = useNotification();
  const [email, setEmail] = useState("student@example.com");

  const handleSave = () => {
    addNotification("Settings saved successfully", "success");
  };

  return (
    <DashboardLayout>
      <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
      <div className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Save Settings
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Settings;



// // src/pages/Settings.jsx
// import React, { useState } from "react";
// import DashboardLayout from "./layouts/DashboardLayout";
// import { useNotification } from "./context/NotificationContext";

// const Settings = () => {
//   const { addNotification } = useNotification();
//   const [email, setEmail] = useState("student@example.com");

//   const handleSave = () => {
//     addNotification("Settings saved successfully", "success");
//   };

//   return (
//     <DashboardLayout>
//       <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
//       <div className="space-y-4">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border rounded p-2 w-full"
//         />
//         <button
//           onClick={handleSave}
//           className="bg-green-500 text-white px-4 py-2 rounded-lg"
//         >
//           Save Settings
//         </button>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Settings;

