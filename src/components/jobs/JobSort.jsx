import React from "react";

const JobSort = ({ sortBy, onSortChange }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <label className="text-sm">Sort by:</label>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="date">Date Posted</option>
        <option value="title">Title</option>
        <option value="company">Company</option>
      </select>
    </div>
  );
};

export default JobSort;
