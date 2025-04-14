import React from "react";
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { chartData } from "../dataOne/data"; 
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Space Missions by Category</h3>
      <ResponsiveContainer>
        <RechartsPieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
