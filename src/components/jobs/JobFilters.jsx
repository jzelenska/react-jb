import React from "react";

const JobFilters = ({ filters, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <select
        value={filters.type}
        onChange={(e) => onFilterChange("type", e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">All Types</option>
        <option value="full-time">Full-time</option>
        <option value="part-time">Part-time</option>
      </select>

      <select
        value={filters.location}
        onChange={(e) => onFilterChange("location", e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">All Locations</option>
        <option value="onsite">On-site</option>
        <option value="remote">Remote</option>
        <option value="hybrid">Hybrid</option>
      </select>
    </div>
  );
};

export default JobFilters;

