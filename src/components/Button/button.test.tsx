import { render, screen, fireEvent } from "@testing-library/react-native";
import Button from "./index";
import renderer from "react-test-renderer";

describe("Test for button Component", () => {
  test("Button renders text correctly", () => {
    const button = render(
      <Button testID="test_button" label="Sample text" />
    ).toJSON() as renderer.ReactTestRendererJSON;
    expect(button.children?.length).toBe(1);
  });
});
