import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "./index";

describe("Button", () => {
  it("calls the onPress handler when pressed", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Button label="Button" color="red" onPress={onPress} />
    );
    const button = getByTestId("button_text");

    fireEvent.press(button);

    expect(onPress).toHaveBeenCalled();
  });

  it('has the correct styles when variant is "filled"', () => {
    const { getByTestId } = render(
      <Button testID="button" label="Button" color="red" variant="filled" />
    );
    const button = getByTestId("button");
    const buttonText = getByTestId("button_text");

    expect(buttonText).toHaveStyle({
      color: "black",
      fontWeight: "600",
    });
    expect(button).toHaveStyle({
      backgroundColor: "red",
    });
  });

  it('has the correct styles when variant is "outlined"', () => {
    const { getByTestId } = render(
      <Button label="Button" color="red" variant="outlined" />
    );
    const button = getByTestId("button_text");

    expect(button).toHaveStyle({
      color: "white",
      fontWeight: "600",
    });
  });
});
