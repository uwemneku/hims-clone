import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Color from "../../../constants/colors";
import SpinningView from "../../../components/Animations/SpinningView";

const LoadingAnimation = () => {
  return (
    <SpinningView>
      <AntDesign name="loading2" size={24} color={Color.white} />
    </SpinningView>
  );
};

export default LoadingAnimation;

const styles = StyleSheet.create({});
