// src/components/dashboards/ChartWrapper.jsx
import React from "react";
import { ResponsiveContainer } from "recharts";

const ChartWrapper = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-3">
    {title && <h3 className="text-lg font-semibold">{title}</h3>}
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  </div>
);

export default ChartWrapper;

