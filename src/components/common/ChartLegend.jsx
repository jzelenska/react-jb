// src/components/common/ChartLegend.jsx
import React from "react";

const ChartLegend = ({ payload }) => (
  <ul className="flex flex-wrap gap-3 text-sm">
    {payload.map((entry, index) => (
      <li key={`legend-${index}`} className="flex items-center gap-2">
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: entry.color }}
        />
        {entry.value}
      </li>
    ))}
  </ul>
);

export default ChartLegend;

