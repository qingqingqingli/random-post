import "react-native";
import React from "react";
import App from "../App";
import renderer, { act } from "react-test-renderer";
import PostScreen from "../src/PostScreen/PostScreen";

const postURL = "http://jsonplaceholder.typicode.com/posts";
const authorURL = "http://jsonplaceholder.typicode.com/users";

// const createTestProps = () => ({
//     navigation: {
//         navigate: jest.fn()
//     },
//     ...props
// });
//
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve({
//         userId: 1,
//         id: 1,
//         title: "test title",
//         body: "test body",
//       }),
//   })
// );

// beforeEach(() => {
//   fetch.resetMocks();
// });

it("renders correctly", async () => {
  renderer.create(<App />);
});

// describe("Post Screen", () => {
//     it("loads the post on mount", () => {
//         const {container} = render(<PostScreen />)
//     })
// })

