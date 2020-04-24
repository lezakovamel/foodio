import React from "react";
import { render } from "@testing-library/react";
import MainPage from "./components/pages/MainPage";

test("mainPage - test Card", () => {
  const { getByTestId } = render(<MainPage />);
  const card = getByTestId("testCard");
  expect(card).toBeInTheDocument();
});

test("mainPage - test Header", () => {
  const { getByTestId } = render(<MainPage />);
  const header = getByTestId("testHeader");
  expect(header).toBeInTheDocument();
});

test("mainPage - test Footer", () => {
  const { getByTestId } = render(<MainPage />);
  const footer = getByTestId("testFooter");
  expect(footer).toBeInTheDocument();
});
