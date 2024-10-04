import React from "react";
import { DashboardCard } from "./DashboardCard";

import { metrics } from "../data/metricsSectionData";
export const MetricsSection = () => {
  return (
    <div className="metrics-section">
      {metrics.map((metric, index) => (
        <DashboardCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default MetricsSection;
