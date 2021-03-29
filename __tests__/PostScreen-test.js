import * as React from "react";
import { render, act } from "@testing-library/react-native";
import App from "../App";
import renderer from "react-test-renderer";

describe("Testing Post Screen", () => {
  test("Can render correctly", async () => {
    await act(async () => renderer.create(<App />));
  });

  test("Contains the correct header", async () => {
    const { findByText } = render(<App />);
    const header = await findByText("Post Screen");

    expect(header).toBeTruthy();
  });
});
