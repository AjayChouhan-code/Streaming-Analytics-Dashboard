import React from "react";
import { DashboardCard } from "./DashboardCard";

import { metrics } from "../data/metricsSectionData";

export const MetricsSection = () => {
  return (
    <div className="metrics-section">
      <div className="row">
        {metrics.map((metric, index) => (
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg">
            <DashboardCard key={index} {...metric} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsSection;
