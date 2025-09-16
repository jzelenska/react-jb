import React from "react";

const ApplicantListModal = ({ applicants, onClose }) => {
  if (!applicants) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Applicants</h2>
        <ul className="divide-y">
          {applicants.map((app) => (
            <li key={app._id} className="py-2">
              <p className="font-medium">{app.user?.name || "Anonymous"}</p>
              <p className="text-sm text-gray-600">{app.user?.email}</p>
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-blue-600 text-white p-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ApplicantListModal;



// import { useEffect, useState } from "react";
// import applicationService from "../../services/applicationService";

// const ApplicantListModal = ({ jobId, onClose }) => {
//   const [applicants, setApplicants] = useState([]);

//   useEffect(() => {
//     const fetchApplicants = async () => {
//       const data = await applicationService.getApplicationsByJob(jobId);
//       setApplicants(data);
//     };
//     fetchApplicants();
//   }, [jobId]);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50">
//       <div className="bg-white p-6 rounded-lg w-96">
//         <h2 className="text-lg font-bold mb-4">Applicants</h2>
//         <ul className="space-y-2">
//           {applicants.map((app) => (
//             <li key={app._id} className="border-b pb-2">
//               {app.applicant?.fullName || "Unnamed"} - {app.status}
//             </li>
//           ))}
//         </ul>
//         <button
//           onClick={onClose}
//           className="mt-4 px-4 py-2 bg-gray-200 rounded-lg"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ApplicantListModal;

