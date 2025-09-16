// src/components/jobs/JobCard.jsx
// 🚧 Wired with ApplicationFormModal + dummy services

import React, { useState } from "react";
import ApplicationFormModal from "../forms/ApplicationFormModal";
import PrimaryButton from "../common/buttons/PrimaryButton";

const JobCard = ({ job }) => {
  const [isApplying, setIsApplying] = useState(false);

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{job.company || "Unknown Co."}</p>
      <p className="text-gray-700 mt-2">{job.description}</p>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Location: {job.location || "Remote"}
        </span>
        <PrimaryButton onClick={() => setIsApplying(true)}>
          Apply
        </PrimaryButton>
      </div>

      {/* Modal */}
      {isApplying && (
        <ApplicationFormModal jobId={job.id} onClose={() => setIsApplying(false)} />
      )}
    </div>
  );
};

export default JobCard;



// import React from "react";
// import { formatDate } from "../../utils/formatDate";

// export default function JobCard({ job }) {
//   if (!job) return null;
//   return (
//     <div className="card">
//       <div className="row" style={{ justifyContent: "space-between" }}>
//           <div>
//             <h3 style={{ margin: 0 }}>{job.title}</h3>
//             <div className="muted">{job.company} • {job.location}</div>
//           </div>
//           <span className="badge">{job.type || "Full-time"}</span>
//         </div>
//         <p className="muted">{job.summary || "Short job summary…"}</p>
//         <small className="muted">Posted {formatDate(job.postedAt || new Date().toISOString())}</small>
//     </div>
//   );
// }






// import { Link } from "react-router-dom";

// export default function JobCard({ job }) {
//   return (
//     <div style={{ border: "1px solid #ccc", padding: 15, marginBottom: 10 }}>
//       <h3>{job.title}</h3>
//       <p>{job.company} - {job.location}</p>
//       <p>Type: {job.type}</p>
//       <Link to={`/jobs/${job.id}`}>View Details</Link>
//     </div>
//   );
// }


