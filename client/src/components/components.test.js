import React from "react";
import { render, fireEvent } from "@testing-library/React";
import ClassComponent from "./ClassComponent";
import Display from "./Display";
import App from "../App";

test("this will render without crashing", () => {
  render(<App />);
});

// test("I have a Player Text inside of Display component", () => {
//   const { getByText } = render(<Display />);

//   getByText("Player");
// });

// test("Players header is found", () => {
//   const { getByTestId } = render(<Display />);

//   getByTestId(/players-header/i);
// });
