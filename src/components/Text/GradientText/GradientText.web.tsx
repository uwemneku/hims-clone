import { StyleSheet } from "react-native";
import React, { ComponentProps } from "react";
// import MaskedView from "@react-native-masked-view/masked-view";
import BaseText from "../index";

interface Props {
  height: number | `${string}%`;
  children: String;
  colors: string[];
  textSize: ComponentProps<typeof BaseText>["size"];
}
const GradientText = ({ children, textSize }: Props) => {
  return (
    <>
      <BaseText allowFontScaling={false} size={textSize} align="center">
        {children}
      </BaseText>
    </>
  );
};

export default GradientText;
