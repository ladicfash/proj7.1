import React, { useState } from "react";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import LineChart from "../Charts/LineChart";

const ChartToggle = () => {
  const [activeChart, setActiveChart] = useState("bar");

  return (
    <div>
      <h2>Toggle Charts</h2>
      <div>
        <button onClick={() => setActiveChart("bar")}>Bar Chart</button>
        <button onClick={() => setActiveChart("pie")}>Pie Chart</button>
        <button onClick={() => setActiveChart("pie")}>LIne Chart</button>
      </div>
      <div className="chart-container">
        {activeChart === "bar" && <BarChart />}
        {activeChart === "pie" && <PieChart />}
        {activeChart === "pie" && <LineChart />}
      </div>
    </div>
  );
};

export default ChartToggle;