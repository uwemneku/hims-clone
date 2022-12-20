import { StyleSheet, Text, View } from "react-native";
import React, { ComponentProps } from "react";
import GradientText from "../../../components/Text/GradientText";
interface Props {
  size: "small" | "title";
  children: string;
}
const QuestionnaireGradientText = ({ children, size }: Props) => {
  const isSmall = size === "small";
  const textSize = isSmall ? "body" : "h1";
  return (
    <GradientText
      textSize={textSize}
      height={isSmall ? 20 : 100}
      colors={["#7685d0", "#70b8bb"]}
    >
      {children}
    </GradientText>
  );
};

export default QuestionnaireGradientText;

const styles = StyleSheet.create({});
