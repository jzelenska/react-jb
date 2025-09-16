import React from "react";
export default function EmptyState({ title = "No data", subtitle = "Try adjusting filters" }) {
  return (
    <div className="card-empty">
      <div className="muted">{title}</div>
      <small className="muted">{subtitle}</small>
    </div>
  );
}








 // src/components/common/EmptyState.jsx
// import React from "react";

// export default function EmptyState({ message }) {
//   return (
//     <div className="text-center p-5 text-muted">
//       <i className="bi bi-inbox display-4 mb-3"></i>
//       <p>{message}</p>
//     </div>
//   );
// }





// Usage:{jobs.length === 0 ? (
//   <EmptyState message="No jobs posted yet. Start by creating one!" />
// ) : (
//   <JobList jobs={jobs} />
// )}

// To put a condition lined to Role variable

// <EmptyState message="You haven’t applied to any jobs yet." />

