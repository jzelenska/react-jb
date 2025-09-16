// src/components/dashboards/charts/TopJobsByApplications.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import ChartWrapper from "../ChartWrapper";
import ChartTooltip from "@/components/common/ChartTooltip";
import ChartLegend from "@/components/common/ChartLegend";

const TopJobsByApplications = ({ data }) => (
  <ChartWrapper title="Top Jobs by Applications">
    <BarChart data={data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis type="category" dataKey="job" />
      <Tooltip content={<ChartTooltip />} />
      <Legend content={<ChartLegend />} />
      <Bar dataKey="applications" fill="#6366f1" />
    </BarChart>
  </ChartWrapper>
);

export default TopJobsByApplications;



// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
// import ChartWrapper from "./ChartWrapper";
// import ChartTooltip from "./ChartTooltip";
// import ChartLegend from "./ChartLegend";

// const TopJobsByApplications = ({ data }) => {
//   return (
//     <ChartWrapper title="Top Jobs by Applications">
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart layout="vertical" data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis type="number" />
//           <YAxis dataKey="job" type="category" width={150} />
//           <ChartTooltip />
//           <ChartLegend />
//           <Bar dataKey="applications" fill="#6366f1" />
//         </BarChart>
//       </ResponsiveContainer>
//     </ChartWrapper>
//   );
// };

// export default TopJobsByApplications;

