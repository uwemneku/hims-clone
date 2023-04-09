import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import React, { ComponentProps } from "react";
import BaseText from "../text";
import Color from "../../constants/colors";
import { getAccessibleColor } from "../../utils";

interface Props extends Omit<ComponentProps<typeof TouchableOpacity>, "style"> {
  label: string | JSX.Element;
  /**
   * @default "filled"
   */
  variant?: "filled" | "outlined";
  color?: string;
  style?: {
    /**
     * This is applied to the Touchable opacity element wrapping the button
     */
    button?: ViewStyle;
    /**
     * This is applied to the Text element holing the label
     */
    text?: TextStyle;
  };
  centerButton?: boolean;
}

const Button = ({
  label,
  variant = "filled",
  color = Color.black,
  style,
  centerButton = true,
  ...props
}: Props) => {
  const textColor = variant === "filled" ? getAccessibleColor(color) : "white";
  const backgroundColor = variant === "filled" ? color : "transparent";
  const borderWidth = variant === "filled" ? 0 : 1;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: color,
          backgroundColor,
          borderWidth,
          alignSelf: centerButton ? "center" : "auto",
        },
        style?.button,
      ]}
      {...props}
    >
      <BaseText
        testID="button_text"
        style={{ ...styles.text, color: textColor, ...style?.text }}
        align="center"
        size="small"
      >
        {label}
      </BaseText>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: "100%",
    maxWidth: 500,
    borderRadius: 50,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
  },
});
