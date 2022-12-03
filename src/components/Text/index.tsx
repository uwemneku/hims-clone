import { StyleSheet, Text, TextStyle, View } from "react-native";
import React, { ComponentProps } from "react";
import AppFonts from "../../constants/fonts";
import Color from "../../constants/colors";
interface Props extends ComponentProps<typeof Text> {
  fontWeight?: keyof typeof AppFonts;
  color?: string;
  style?: TextStyle;
  align?: TextStyle["textAlign"];
  size?: "h1" | "h2" | "subTitle" | "body";
}
const AppText = ({
  fontWeight = "sofia_bold",
  color = Color.black,
  style,
  size = "body",
  align = "left",
  ...props
}: Props) => {
  return (
    <Text
      style={[
        {
          fontFamily: fontWeight,
          color,
          fontSize: sizes[size],
          textAlign: align,
        },
        style,
      ]}
      {...props}
    />
  );
};

const sizes: { [key in Required<Props>["size"]]: number } = {
  body: 16,
  h1: 30,
  h2: 18,
  subTitle: 10,
};
export default AppText;

const styles = StyleSheet.create({});