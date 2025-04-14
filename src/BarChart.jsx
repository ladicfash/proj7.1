import React from "react";
import { chartData } from "../dataOne/data";

const BarChart = () => {
  return (
    <div>
      <h3>Bar Chart</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {chartData.map((data, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {data.label}: 
            <div
              style={{
                width: `${data.value}px`,
                background: "blue",
                height: "20px",
                marginTop: "5px",
                color: "white",
                textAlign: "center",
              }}
            >
              {data.value}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BarChart;