import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders the Streamify Dashboard and its sections", () => {
    render(<App />);

    expect(screen.getByText(/Streamify Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Metrics Section Content/i)).toBeInTheDocument();
    expect(screen.getByText(/Chart Section Content/i)).toBeInTheDocument();
    expect(screen.getByText(/Table Section Content/i)).toBeInTheDocument();
  });
});
