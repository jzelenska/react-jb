// src/layouts/DashboardLayout.jsx
import React from "react";
import { NotificationProvider } from "../context/NotificationContext";
import NotificationDropdown from "../components/NotificationDropdown";

const DashboardLayout = ({ children }) => {
  return (
    <NotificationProvider>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
          <h1 className="text-xl font-bold">JobBoard Dashboard</h1>
          <NotificationDropdown />
        </header>

        {/* Main content */}
        <main className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          {/* Sidebar */}
          <aside className="bg-white shadow rounded-xl p-4">Sidebar nav</aside>

          {/* Content */}
          <section className="md:col-span-3 bg-white shadow rounded-xl p-4">
            {children}
          </section>
        </main>
      </div>
    </NotificationProvider>
  );
};

export default DashboardLayout;



// // src/layouts/DashboardLayout.jsx
// import React from "react";
// import { NotificationProvider } from "./context/NotificationContext";
// import NotificationDropdown from "./components/NotificationDropdown";

// const DashboardLayout = ({ children }) => {
//   return (
//     <NotificationProvider>
//       <div className="min-h-screen flex flex-col">
//         {/* Header */}
//         <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
//           <h1 className="text-xl font-bold">JobBoard Dashboard</h1>
//           <NotificationDropdown />
//         </header>

//         {/* Main content */}
//         <main className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
//           {/* Sidebar */}
//           <aside className="bg-white shadow rounded-xl p-4">Sidebar nav</aside>

//           {/* Content */}
//           <section className="md:col-span-3 bg-white shadow rounded-xl p-4">
//             {children}
//           </section>
//         </main>
//       </div>
//     </NotificationProvider>
//   );
// };

// export default DashboardLayout;
