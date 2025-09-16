import React from "react";
import { Eye } from "lucide-react";

const JobTableRow = ({ job, onSelectJob }) => {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="p-3">{job.title}</td>
      <td className="p-3">{job.company?.name || "N/A"}</td>
      <td className="p-3">{job.location}</td>
      <td className="p-3">{new Date(job.createdAt).toLocaleDateString()}</td>
      <td className="p-3">
        <button
          onClick={() => onSelectJob(job)}
          className="text-blue-600 hover:underline flex items-center gap-1"
        >
          <Eye size={16} /> View
        </button>
      </td>
    </tr>
  );
};

export default JobTableRow;


