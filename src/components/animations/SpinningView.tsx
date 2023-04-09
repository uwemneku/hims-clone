import { StyleSheet, Text, View } from "react-native";
import React, { FC, PropsWithChildren } from "react";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const SpinningView: FC<PropsWithChildren<{}>> = ({ children }) => {
  const rotate = useSharedValue(0);
  rotate.value = withRepeat(withTiming(360, { duration: 1000 }), -1, false);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value}deg` }],
  }));
  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};

export default SpinningView;

const styles = StyleSheet.create({});
