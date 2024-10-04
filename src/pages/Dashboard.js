import React, { lazy, Suspense } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import "./Dashboard.css";

const MetricsSection = lazy(() => import("../components/MetricsSection"));
const ChartSection = lazy(() => import("../components/ChartSection"));
const TableSection = lazy(() => import("../components/TableSection"));

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header text-center py-3">
        <Container>
          <h1>Streamify</h1>
        </Container>
      </header>
      <main>
        <Container>
          <Suspense
            fallback={
              <div className="loader-container">
                <Spinner
                  animation="border"
                  role="status"
                  className="custom-spinner"
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            }
          >
            <MetricsSection />
            <ChartSection />
            <TableSection />
          </Suspense>
        </Container>
      </main>
    </div>
  );
};
