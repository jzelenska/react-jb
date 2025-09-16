// src/components/dashboards/charts/ApplicationsOverTime.jsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import ChartWrapper from "../ChartWrapper";
import ChartTooltip from "@/components/common/ChartTooltip";
import ChartLegend from "@/components/common/ChartLegend";

const ApplicationsOverTime = ({ data }) => (
  <ChartWrapper title="Applications Over Time">
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip content={<ChartTooltip />} />
      <Legend content={<ChartLegend />} />
      <Line type="monotone" dataKey="applications" stroke="#2563eb" strokeWidth={2} />
    </LineChart>
  </ChartWrapper>
);

export default ApplicationsOverTime;



// import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
// import ChartWrapper from "./ChartWrapper";
// import ChartTooltip from "./ChartTooltip";
// import ChartLegend from "./ChartLegend";

// const ApplicationsOverTime = ({ data }) => {
//   return (
//     <ChartWrapper title="Applications Over Time">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <ChartTooltip />
//           <ChartLegend />
//           <Line type="monotone" dataKey="applications" stroke="#3b82f6" strokeWidth={2} dot={false} />
//         </LineChart>
//       </ResponsiveContainer>
//     </ChartWrapper>
//   );
// };

// export default ApplicationsOverTime;

