// src/components/dashboards/charts/ApplicationStatusDistribution.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import ChartWrapper from "../ChartWrapper";
import ChartTooltip from "@/components/common/ChartTooltip";
import ChartLegend from "@/components/common/ChartLegend";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

const ApplicationStatusDistribution = ({ data }) => (
  <ChartWrapper title="Application Status Distribution">
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="status"
        cx="50%"
        cy="50%"
        outerRadius={80}
        label
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<ChartTooltip />} />
      <Legend content={<ChartLegend />} />
    </PieChart>
  </ChartWrapper>
);

export default ApplicationStatusDistribution;



// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
  // import ChartWrapper from "./ChartWrapper";
  // import ChartTooltip from "./ChartTooltip";
  // import ChartLegend from "./ChartLegend";

  // const COLORS = ["#3b82f6", "#f59e0b", "#10b981", "#ef4444"];

  // const ApplicationStatusDistribution = ({ data }) => {
  //   return (
  //     <ChartWrapper title="Application Status Distribution">
  //       <ResponsiveContainer width="100%" height="100%">
  //         <PieChart>
  //           <Pie
  //             data={data}
  //             dataKey="count"
  //             nameKey="status"
  //             cx="50%"
  //             cy="50%"
  //             outerRadius={90}
  //             label
  //           >
  //             {data.map((entry, index) => (
  //               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
  //             ))}
  //           </Pie>
  //           <ChartTooltip />
  //           <ChartLegend />
  //         </PieChart>
  //       </ResponsiveContainer>
  //     </ChartWrapper>
  //   );
  // };

  // export default ApplicationStatusDistribution;
// Compare this snippet from src/components/dashboards/charts/TopCandidatesByApplications.jsx: