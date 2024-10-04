import React from "react";

export const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div className="card mb-lg-0 mb-3" style={{ background: color }}>
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="mb-0">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
