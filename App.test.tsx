import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import App from "./App";

/**
 * A good place to start is having a tests that your component renders correctly.
 */
test("renders correctly", () => {
  // Idiom: no need to capture render output, as we will use `screen` for queries.
  const app = render(<App />);

  // Idiom: `getBy*` queries are predicates by themselves, but we will use it with `expect().toBeTruthy()`
  // to clarify our intent.
  expect(app).toBeTruthy();
});
