// src/pages/CompanyDashboard.jsx
import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import JobTable from "../components/jobs/JobTable";

const CompanyDashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="text-lg font-semibold mb-4">Your Posted Jobs</h2>
      <JobTable />
    </DashboardLayout>
  );
};

export default CompanyDashboard;



// // src/pages/CompanyDashboard.jsx
// import React from "react";
// import DashboardLayout from "@/layouts/DashboardLayout";
// import JobTable from "@/components/JobTable";

// const CompanyDashboard = () => {
//   return (
//     <DashboardLayout>
//       <h2 className="text-lg font-semibold mb-4">Your Posted Jobs</h2>
//       <JobTable />
//     </DashboardLayout>
//   );
// };

// export default CompanyDashboard;
