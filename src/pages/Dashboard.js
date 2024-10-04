import React, { lazy, Suspense } from "react";
import Container from "react-bootstrap/Container";
import "./Dashboard.css";

const MetricsSection = lazy(() => import("../components/MetricsSection"));
const ChartSection = lazy(() => import("../components/ChartSection"));
const TableSection = lazy(() => import("../components/TableSection"));

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header text-center py-3">
        <Container>
          <h1>Streamify </h1>
        </Container>
      </header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading Metrics...</div>}>
            <MetricsSection />
          </Suspense>
          <Suspense fallback={<div>Loading Charts...</div>}>
            <ChartSection />
          </Suspense>
          <Suspense fallback={<div>Loading Table...</div>}>
            <TableSection />
          </Suspense>
        </Container>
      </main>
    </div>
  );
};
