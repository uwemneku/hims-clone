import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  size?: "xs" | "s" | "m" | "l" | "xl";
  /**
   * Direction of the divider
   */
  dir?: "vertical" | "horizontal";
}
const Divider = ({ dir = "vertical", size = "m" }: Props) => {
  const _size = SIZES[size];
  const styleProperty = dir === "vertical" ? "height" : "width";
  return <View style={{ [styleProperty]: _size }} />;
};

const SIZES: { [key in Required<Props>["size"]]: number } = {
  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 30,
};

export default Divider;

const styles = StyleSheet.create({});
