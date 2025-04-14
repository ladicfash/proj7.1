import React, { useState } from "react";
import { Link } from "react-router-dom";
import { items } from "../dataOne/data";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";
import LineChart from "../charts/LineChart";

const Dashboard = () => {
  const [showCharts, setShowCharts] = useState(true);

  return (
    <div className="dashboard">
      <header>
        <h1>Dashboard</h1>
        <button onClick={() => setShowCharts((prevState) => !prevState)}>
          {showCharts ? "Hide Charts" : "Show Charts"}
        </button>
      </header>
      {showCharts && (
        <section className="charts">
          <h2>Data Visualization</h2>
          <div className="chart-container">
            <BarChart />
            <PieChart />
            <LineChart item={items[0]} /> 
          </div>
        </section>
      )}
      <section className="item-list">
        <h2>Items</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link to={`/details/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;