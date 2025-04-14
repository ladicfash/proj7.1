import React, { useState, useEffect } from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const sampleMissionData = {
  Apollo11: [
    { day: "Day 1", distance: 100000 },
    { day: "Day 2", distance: 200000 },
    { day: "Day 3", distance: 300000 },
    { day: "Day 4", distance: 384400 },
    { day: "Day 5", distance: 370000 },
    { day: "Day 6", distance: 360000 },
    { day: "Day 7", distance: 350000 },
  ],
  Artemis1: [
    { day: "Day 1", distance: 120000 },
    { day: "Day 2", distance: 240000 },
    { day: "Day 3", distance: 365000 },
    { day: "Day 4", distance: 400000 },
    { day: "Day 5", distance: 390000 },
    { day: "Day 6", distance: 380000 },
    { day: "Day 7", distance: 370000 },
  ],
};

const LineChart = ({ mission }) => {
  const [chartData, setChartData] = useState(sampleMissionData[mission] || []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = sampleMissionData[mission] || [];
        setChartData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [mission]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsLineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="distance" stroke="#8884d8" activeDot={{ r: 8 }} />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;