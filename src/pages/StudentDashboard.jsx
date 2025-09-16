// src/pages/StudentDashboard.jsx
import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import JobList from "../components/jobs/JobList";

const StudentDashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="text-lg font-semibold mb-4">Available Jobs</h2>
      <JobList />
    </DashboardLayout>
  );
};

export default StudentDashboard;




// // src/pages/StudentDashboard.jsx
// import React from "react";
// import DashboardLayout from "./layouts/DashboardLayout";
// import JobList from "./components/JobList";

// const StudentDashboard = () => {
//   return (
//     <DashboardLayout>
//       <h2 className="text-lg font-semibold mb-4">Available Jobs</h2>
//       <JobList />
//     </DashboardLayout>
//   );
// };

// export default StudentDashboard;

