import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Color from "../../../constants/colors";

const LoadingAnimation = () => {
  const rotate = useSharedValue(0);
  rotate.value = withRepeat(withTiming(360, { duration: 1000 }), -1, false);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value}deg` }],
  }));
  return (
    <Animated.View style={animatedStyle}>
      <AntDesign name="loading2" size={24} color={Color.white} />
    </Animated.View>
  );
};

export default LoadingAnimation;

const styles = StyleSheet.create({});
