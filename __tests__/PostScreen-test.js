import * as React from "react";
import { render, act, fireEvent } from "@testing-library/react-native";
import App from "../App";
import renderer from "react-test-renderer";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipito",
      }),
  })
);

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
