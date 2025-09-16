import React from "react";
import JobTableRow from "./JobTableRow";

const JobTable = ({ jobs, onSelectJob }) => {
  if (!jobs || jobs.length === 0) {
    return <p className="text-center py-4 text-gray-500">No jobs found.</p>;
  }

  return (
    <table className="min-w-full bg-white border rounded-lg shadow-sm">
      <thead>
        <tr className="bg-gray-100 text-left text-sm font-medium">
          <th className="p-3">Title</th>
          <th className="p-3">Company</th>
          <th className="p-3">Location</th>
          <th className="p-3">Posted</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <JobTableRow key={job._id} job={job} onSelectJob={onSelectJob} />
        ))}
      </tbody>
    </table>
  );
};

export default JobTable;

