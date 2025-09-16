
import React, { useEffect, useState } from "react";
import applicationService from "../services/applicationService";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      try {
        const data = await applicationService.getApplications();
        setApplications(data);
      } catch (err) {
        console.error("Failed to fetch applications:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  if (loading) return <LoadingSpinner />;

  if (!applications.length) {
    return (
      <p className="text-center py-6 text-gray-500">
        You haven’t applied for any jobs yet.
      </p>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-4">My Applications</h1>
      <ul className="divide-y rounded-lg border">
        {applications.map((app) => (
          <li key={app._id} className="p-4">
            <p className="font-medium">{app.job?.title || "Unknown Job"}</p>
            <p className="text-sm text-gray-600">
              {app.job?.company?.name || "Unknown Company"}
            </p>
            <p className="text-xs text-gray-500">
              Applied on {new Date(app.createdAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applications;



//import React, { useEffect, useState } from "react";
// import applicationService from "../services/applicationService";
// import LoadingSpinner from "../components/common/LoadingSpinner";

// const Applications = () => {
//   const [applications, setApplications] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchApplications = async () => {
//       setLoading(true);
//       try {
//         const data = await applicationService.getApplications();
//         setApplications(data);
//       } catch (err) {
//         console.error("Failed to fetch applications:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchApplications();
//   }, []);

//   if (loading) return <LoadingSpinner />;

//   if (!applications.length) {
//     return (
//       <p className="text-center py-6 text-gray-500">
//         You haven’t applied for any jobs yet.
//       </p>
//     );
//   }

//   return (
//     <div className="p-4 md:p-6">
//       <h1 className="text-2xl font-bold mb-4">My Applications</h1>
//       <ul className="divide-y rounded-lg border">
//         {applications.map((app) => (
//           <li key={app._id} className="p-4">
//             <p className="font-medium">{app.job?.title || "Unknown Job"}</p>
//             <p className="text-sm text-gray-600">
//               {app.job?.company?.name || "Unknown Company"}
//             </p>
//             <p className="text-xs text-gray-500">
//               Applied on {new Date(app.createdAt).toLocaleDateString()}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Applications;
