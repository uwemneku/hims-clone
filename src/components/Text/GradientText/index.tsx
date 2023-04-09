import { Platform, StyleSheet, View } from "react-native";
import React, { ComponentProps, Suspense, lazy } from "react";
import BaseText from "../index";

const Comp = lazy(() =>
  Platform.OS === "web"
    ? import("./GradientText.web")
    : import("./GradientText")
);

interface Props {
  height: number | `${string}%`;
  children: String;
  colors: string[];
  textSize: ComponentProps<typeof BaseText>["size"];
}
const GradientText = (props: Props) => {
  return (
    <Suspense fallback={<View />}>
      <Comp {...props} />
    </Suspense>
  );
};

export default GradientText;

const styles = StyleSheet.create({});
