import { Tooltip } from "recharts";

const ChartTooltip = () => (
  <Tooltip
    contentStyle={{
      backgroundColor: "white",
      border: "1px solid #e5e7eb", // Tailwind gray-200
      borderRadius: "0.5rem",
      padding: "0.5rem",
    }}
    labelStyle={{ fontWeight: "600", fontSize: "0.875rem" }}
    itemStyle={{ fontSize: "0.875rem" }}
  />
);

export default ChartTooltip;

