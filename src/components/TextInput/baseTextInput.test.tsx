// import React from "react";
// import { render, fireEvent, waitFor, act } from "@testing-library/react-native";
// import BaseTextInput from "./BaseTextInput";
// import {
//   advanceAnimationByTime,
//   withReanimatedTimer,
// } from "react-native-reanimated/src/reanimated2/jestUtils";

// jest.useFakeTimers();
// const eventData = {
//   nativeEvent: {
//     pageX: 20,
//     pageY: 30,
//   },
// };
// describe("BaseTextInput", () => {
//   it("renders the placeholder text", () => {
//     const { getByText } = render(
//       <BaseTextInput placeholder="Enter your name" />
//     );

//     expect(getByText("Enter your name")).toBeTruthy();
//   });

//   it("animates the placeholder when the text input is focused", async () => {
//     await withReanimatedTimer(async () => {
//       const { getByTestId, getByText } = render(
//         <BaseTextInput testID="input" placeholder="Enter your name" />
//       );
//       const input = getByTestId("input");
//       const placeholder = getByText("Enter your name");
//       fireEvent.changeText(input, "onFocus");
//       await jest.advanceTimersByTime(500);

//       // Wait for the animation to complete before checking the placeholder position
//       await waitFor(() => {
//         expect(placeholder).toHaveAnimatedStyle({ paddingTop: 5000 });
//       });
//     });
//   });

//   it("animates the placeholder back to the middle when the text input is empty on blur", async () => {
//     await withReanimatedTimer(async () => {
//       const { getByText, getByTestId } = render(
//         <BaseTextInput testID="input" placeholder="Enter your name" />
//       );
//       const input = getByTestId("input");

//       fireEvent(input, "onFocus");
//       fireEvent.changeText(input, "John Doe");
//       fireEvent(input, "onBlur");
//       await jest.advanceTimersByTime(500);
//       // Wait for the animation to complete before checking the placeholder position
//       const placeholder = getByText("Enter your name");
//       await waitFor(() => {
//         expect(placeholder).toHaveAnimatedStyle({
//           paddingTop: 50,
//         });
//       });
//     });

//     // fireEvent.focus(input);
//     // fireEvent.changeText(input, "");
//     // fireEvent.blur(input);

//     // // Wait for the animation to complete before checking the placeholder position
//     // await waitFor(() => {
//     //   expect(
//     //     getComputedStyle(getByPlaceholderText("Enter your name")).paddingTop
//     //   ).toEqual("10px");
//     // });
//   });
// });
