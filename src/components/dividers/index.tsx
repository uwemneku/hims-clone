import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  size?: "xs" | "s" | "m" | "l" | "xl" | "2xl" | number;
  /**
   * Direction of the divider
   */
  dir?: "vertical" | "horizontal";
}
const Divider = ({ dir = "vertical", size = "m" }: Props) => {
  const _size = typeof size === "string" ? SIZES[size] : size;
  const styleProperty = dir === "vertical" ? "height" : "width";
  return (
    <View style={{ [styleProperty]: _size, backgroundColor: "transparent" }} />
  );
};

const SIZES: { [key in Required<Props>["size"]]: number } = {
  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 30,
  "2xl": 60,
};

export default Divider;

const styles = StyleSheet.create({});
