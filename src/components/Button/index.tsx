import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import React, { ComponentProps } from "react";

interface Props extends Omit<ComponentProps<typeof TouchableOpacity>, "style"> {
  label: string;
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
}

const Button = ({
  label,
  variant = "filled",
  color,
  style,
  ...props
}: Props) => {
  const textColor = variant === "filled" ? "black" : "white";
  const backgroundColor = variant === "filled" ? color : "transparent";
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { borderColor: color, backgroundColor },
        style?.button,
      ]}
      {...props}
    >
      <Text
        testID="button_text"
        style={[styles.text, { color: textColor }, style?.text]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: "100%",
    borderRadius: 50,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
  },
});
