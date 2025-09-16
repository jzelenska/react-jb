// src/components/dashboards/charts/JobConversionRate.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import ChartWrapper from "../ChartWrapper";
import ChartTooltip from "@/components/common/ChartTooltip";
import ChartLegend from "@/components/common/ChartLegend";

const JobConversionRate = ({ data }) => (
  <ChartWrapper title="Job Conversion Rate">
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="job" />
      <YAxis />
      <Tooltip content={<ChartTooltip />} />
      <Legend content={<ChartLegend />} />
      <Bar dataKey="conversionRate" fill="#10b981" />
    </BarChart>
  </ChartWrapper>
);

export default JobConversionRate;



// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
// import ChartWrapper from "./ChartWrapper";
// import ChartTooltip from "./ChartTooltip";
// import ChartLegend from "./ChartLegend";

// const JobConversionRate = ({ data }) => {
//   return (
//     <ChartWrapper title="Job Conversion Rate">
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="job" />
//           <YAxis />
//           <ChartTooltip />
//           <ChartLegend />
//           <Bar dataKey="conversionRate" fill="#10b981" />
//         </BarChart>
//       </ResponsiveContainer>
//     </ChartWrapper>
//   );
// };

// export default JobConversionRate;

