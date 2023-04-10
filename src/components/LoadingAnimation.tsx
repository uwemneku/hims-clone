import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Color from "../constants/colors";
import SpinningView from "./animations/SpinningView";

interface Props {
  /**default 24 */
  size?: number;
  /**default black */
  color?: string;
}

const LoadingAnimation = ({ size = 24, color = Color.white }: Props) => {
  return (
    <SpinningView>
      <AntDesign name="loading2" size={size} color={color} />
    </SpinningView>
  );
};

export default LoadingAnimation;

const styles = StyleSheet.create({});
