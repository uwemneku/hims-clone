import { StyleProp, Text, TextStyle } from "react-native";
import React, { ComponentProps } from "react";
import AppFonts from "../../constants/fonts";
import Color from "../../constants/colors";
interface Props extends ComponentProps<typeof Text> {
  fontWeight?: keyof typeof AppFonts;
  color?: string;
  style?: StyleProp<TextStyle>;
  align?: TextStyle["textAlign"];
  size?: keyof typeof sizes;
  lineHeight?: number;
}
const BaseText = ({
  fontWeight = "sofia_regular",
  color = Color.black,
  style,
  size = "body",
  align = "left",
  lineHeight,
  ...props
}: Props) => {
  const isStyleArray = Array.isArray(style);
  return (
    <Text
      style={[
        {
          fontFamily: fontWeight,
          color,
          fontSize: sizes[size],
          textAlign: align,
          lineHeight,
        },
        ...(isStyleArray ? style : []),
        !isStyleArray ? style : {},
      ]}
      {...props}
    />
  );
};

const sizes = {
  body: 16,
  h1: 30,
  h2: 22,
  h3: 18,
  small: 14,
  subTitle: 10,
} as const;
export default BaseText;
