import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  if (!jobs || jobs.length === 0) {
    return <p className="text-center py-4 text-gray-500">No jobs available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default JobList;


