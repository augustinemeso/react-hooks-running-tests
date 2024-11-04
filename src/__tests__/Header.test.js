import React from "react"; // Add this line
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);
  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});
