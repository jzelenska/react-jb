import { Legend } from "recharts";

const ChartLegend = () => (
  <Legend
    verticalAlign="bottom"
    height={36}
    wrapperStyle={{
      paddingTop: "8px",
      fontSize: "0.875rem",
      color: "#374151", // Tailwind gray-700
    }}
  />
);

export default ChartLegend;
