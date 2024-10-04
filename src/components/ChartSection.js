import React from "react";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  userData,
  revenueData,
  topSongsData,
  COLORS,
} from "../data/cardSectionData.js";
const ChartSection = () => {
  return (
    <div className="chart-section">
      <div className="chart-container">
        <h3 className="mt-5 mb-3">User Growth (Last 12 Months)</h3>
        <div className="card">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" />
              <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="chart-container">
            <h3 className="mt-5 mb-3">Revenue Distribution</h3>
            <div className="card">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={revenueData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                  >
                    {revenueData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="chart-container">
            <h3 className="mt-5 mb-3">Top 5 Streamed Songs (Last 30 Days)</h3>
            <div className="card mb-5">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topSongsData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="streams" fill="#8884d8" barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
