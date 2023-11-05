import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders App with initial count value", () => {
  render(<App />);
  const countDisplay = screen.getByTestId("count");
  expect(countDisplay).toHaveTextContent("Count: 0");
});

test("increments and decrements count correctly", () => {
  render(<App />);
  const countDisplay = screen.getByTestId("count");
  const incrementButton = screen.getByTestId("increment");
  const decrementButton = screen.getByTestId("decrement");

  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent("Count: 1");

  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent("Count: 0");
});

test("should reset the counter", () => {
  render(<App />);
  const incrementButton = screen.getByTestId("increment");
  const countDisplay = screen.getByTestId("count");
  const resetButton = screen.getByTestId("reset");
  //first check if counter is 0
  expect(countDisplay).toHaveTextContent("Count: 0");
  //then update the counter + 2 and check if its 2
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent("Count: 2");
  //then reset the counter and check if it's 0
  fireEvent.click(resetButton);
  expect(countDisplay).toHaveTextContent("Count: 0");
});
